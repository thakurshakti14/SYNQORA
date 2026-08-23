"""Backend tests for Synqora API - demo requests and health."""
import os
import pytest
import requests

BASE_URL = os.environ.get("REACT_APP_BACKEND_URL")
if not BASE_URL:
    # Fallback to reading from frontend/.env
    with open("/app/frontend/.env") as f:
        for line in f:
            if line.startswith("REACT_APP_BACKEND_URL="):
                BASE_URL = line.strip().split("=", 1)[1]
                break
BASE_URL = BASE_URL.rstrip("/")


@pytest.fixture
def api():
    s = requests.Session()
    s.headers.update({"Content-Type": "application/json"})
    return s


# Health
def test_root(api):
    r = api.get(f"{BASE_URL}/api/")
    assert r.status_code == 200
    assert "message" in r.json()


# Demo requests - create + persistence
def test_create_demo_request_valid(api):
    payload = {
        "name": "TEST_Alice",
        "email": "test_alice@example.com",
        "company": "TEST_Acme Corp",
        "role": "CEO",
        "team_size": "11-50",
        "message": "Interested in demo",
    }
    r = api.post(f"{BASE_URL}/api/demo-requests", json=payload)
    assert r.status_code == 201, r.text
    data = r.json()
    assert "id" in data and isinstance(data["id"], str) and len(data["id"]) > 0
    assert data["name"] == payload["name"]
    assert data["email"] == payload["email"]
    assert data["company"] == payload["company"]
    assert data["role"] == payload["role"]
    assert data["team_size"] == payload["team_size"]

    # Verify persistence
    lr = api.get(f"{BASE_URL}/api/demo-requests")
    assert lr.status_code == 200
    ids = [item["id"] for item in lr.json()]
    assert data["id"] in ids


def test_create_demo_request_minimal(api):
    payload = {"name": "TEST_Bob", "email": "test_bob@example.com", "company": "TEST_Co"}
    r = api.post(f"{BASE_URL}/api/demo-requests", json=payload)
    assert r.status_code == 201
    d = r.json()
    assert d["role"] is None
    assert d["team_size"] is None
    assert d["message"] is None


def test_create_demo_request_invalid_email(api):
    payload = {"name": "TEST_X", "email": "not-an-email", "company": "TEST_C"}
    r = api.post(f"{BASE_URL}/api/demo-requests", json=payload)
    assert r.status_code == 422


def test_create_demo_request_missing_required(api):
    r = api.post(f"{BASE_URL}/api/demo-requests", json={"email": "a@b.com"})
    assert r.status_code == 422


def test_list_demo_requests(api):
    r = api.get(f"{BASE_URL}/api/demo-requests")
    assert r.status_code == 200
    assert isinstance(r.json(), list)
