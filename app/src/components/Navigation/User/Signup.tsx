"use client"


export default function Signup() {
    return (
        <form action="">
            <label htmlFor="email">Email: </label>
            <input type="email" name="email" id="email" />
            <label htmlFor="password">Create Password</label>
            <input type="password" name="password" id="password" />
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input type="password" name="confirmPassword" id="confirmPassword" />
            <button type="submit">Signup</button>
        </form>
    )
}
