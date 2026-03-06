import type { IPasswordCard } from "../Interfaces/PasswordCard"

const API_URL = "http://localhost:3000"

export async function getCards() {
    const response = await fetch(`${API_URL}/password-cards`)
    return response.json()
}

export async function createCard(data: IPasswordCard) {
    const response = await fetch(`${API_URL}/password-cards`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    })

    return response.json()
}

export async function updateCard(id: string, data: IPasswordCard) {
    const response = await fetch(`${API_URL}/password-cards/${id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    })

    return response.json()
}

export async function deleteCard(id: string) {
    await fetch(`${API_URL}/password-cards/${id}`, {
        method: "DELETE",
    })
}