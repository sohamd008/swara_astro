export async function onRequestPost(context) {
    const { request, env } = context;

    try {
        const { token } = await request.json();

        if (!token) {
            return new Response(JSON.stringify({ success: false, error: "Missing token" }), {
                status: 400,
                headers: { "Content-Type": "application/json" },
            });
        }

        const secret = env.RECAPTCHA_SECRET_KEY;

        if (!secret) {
            return new Response(JSON.stringify({ success: false, error: "Server configuration error: Missing Secret Key" }), {
                status: 500,
                headers: { "Content-Type": "application/json" },
            });
        }

        const response = await fetch("https://www.google.com/recaptcha/api/siteverify", {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: `secret=${secret}&response=${token}`,
        });

        const data = await response.json();

        return new Response(JSON.stringify(data), {
            headers: { "Content-Type": "application/json" },
        });
    } catch (err) {
        return new Response(JSON.stringify({ success: false, error: err.message }), {
            status: 500,
            headers: { "Content-Type": "application/json" },
        });
    }
}
