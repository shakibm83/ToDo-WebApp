type HttpMethod = "Get" | "Post" | "Put" | "Delete";

class ApiClient {
    private baseUrl: string = "http://todo.local/api/content/";
    private token: string = "API-cdbfaf47d05951416bda8018d445b63d59d5d3e1";

    private async request<T>(endpoint: string, method: HttpMethod = "Get", body?: unknown): Promise<T> {
        const res = await fetch(`${this.baseUrl}${endpoint}`, {
            headers: {
                "Content-Type": "application/json",
                "api-key": this.token,
            },
            body: body ? JSON.stringify(body) : undefined,
        },
        );

        if (!res.ok) {
            throw new Error(`Api Error: ${res.status}`);
        }

        return res.json();
    }

    public async get<T>(endpoint: string): Promise<T> {
        return await this.request(endpoint, "Get");
    }

    public async post<T>(endpoint: string, body?: unknown): Promise<T> {
        return await this.request(endpoint, "Get", body);
    }
}

export const Client = new ApiClient();