import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Footer() {
    return (
        <footer className="bg-body-tertiary text-center text-lg-start">
            <div className="text-center p-3" style={{ backgroundColor: 'var(--color5)' }}>
                © 2024 Copyright:
                <a className="text-body" href=""> Fakhri Abu Baih</a>
            </div>
        </footer>

    )
}
