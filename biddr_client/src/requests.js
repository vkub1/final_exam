const baseUrl = "http://localhost:3000/api/v1";

export const Auction = {
    index() {
        return fetch(`${baseUrl}/auctions`).then(res => res.json())
    },
    show(id) {
        return fetch(`${baseUrl}/auctions/${id}`).then(res => res.json())
    },
    create(params) {
        return fetch(`${baseUrl}/auctions`, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            credentials: "include",
            body: JSON.stringify(params)
        }).then(res => res.json())
    }
}

export const Bid = {
    create(params, auctionId) {
        return fetch(`${baseUrl}/auctions/${auctionId}/bids`, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            credentials: "include",
            body: JSON.stringify(params)
        }).then(res => res.json())
    }
}

export const Session = {
    create(params) {
        return fetch(`${baseUrl}/session`, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            credentials: 'include',
            body: JSON.stringify(params)
        }).then(res => res.json())
    },
    destroy() {
        return fetch(`${baseUrl}/session`, {
            method: 'DELETE',
            credentials: 'include',
        }).then(res => res.json())
    }
}

export const User = {
    current() {
        return fetch(`${baseUrl}/users/current`, {
            credentials: 'include'
        })
        .then(res => res.json())
    },
    create(params) {
        return fetch(`${baseUrl}/users`, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            credentials: 'include',
            body: JSON.stringify(params)
        }).then(res => res.json())
    }
}