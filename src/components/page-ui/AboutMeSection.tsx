// src/components/page-ui/AboutMeSection.tsx
"use client";
import React from "react";


export function AboutMeSection() {
    return (
        <section id = "aboutme"
            style={{
                maxWidth: '1280px',
                margin: '0 auto',
                padding: '80px 32px',
                height: '100vh',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
            }}
        >
            <div
                style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    width: '100%',
                    maxWidth: '960px', // Adjust max width as needed
                }}
            >
                <div
                    style={{
                        flex: '1',
                        textAlign: 'left',
                        paddingRight: '32px', // Space between text and image
                    }}
                >
                    <p><br /> </p>

                    <h1 style={{ fontSize: '36px', fontWeight: 'bold' }}>About Me</h1>
                    <p style={{ fontSize: '18px' }}>
                        I'm a Software Engineering <span style={{ color: 'red' }}>Student</span> at Aalborg University in Copenhagen, passionate about programming languages, algorithms, and data structures. Beyond coding, I prioritize physical fitness through sports like Paddle Tennis and Disc Golf.
                    </p>
                    <p><br /> </p>

                    <p style={{ fontSize: '18px' }}>
                        On weekends,<br />
                        I enjoy the vibrant social scene, and instead of books, I dive into Stack Overflow to stay updated.
                    </p>
                    <p><br /> </p>

                    <p style={{ fontSize: '18px' }}>
                        I thrive on developing games and apps, blending technical skills with creativity to innovate and engage users.
                    </p>
                    <p><br /> </p>
                    <p style={{ fontSize: '18px' }}>
                        I excel in team settings,<br />
                        leveraging over four years of experience in C# and other languages to tackle diverse programming challenges.
                    </p>
                </div>
                <div
                    style={{
                        flex: '1',
                        display: 'flex',
                        justifyContent: 'center',
                    }}
                >
                    <img
                        src='/images/me.png' // Replace with your actual image path
                        alt="About Me"
                        style={{
                            maxWidth: '100%',
                            height: 'auto',
                            borderRadius: '16px', // Increased border radius for more rounded corners
                            transition: 'transform 0.3s ease-in-out',
                        }}
                        onMouseOver={(e) => (e.currentTarget.style.transform = 'scale(1.05)')}
                        onMouseOut={(e) => (e.currentTarget.style.transform = 'scale(1)')}
                    />
                </div>
            </div>
        </section>
    );
}
