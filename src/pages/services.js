import React from 'react';
import '../styles/services.css';

function Services() {
    return (
        <div className="services-container">
            <h1 className="services-title">My Services</h1>
            <div className="services-list">
                <div className="service-item">
                    <h2 className="service-name">Web Development</h2>
                    <p className="service-description">
                        Creating responsive and dynamic websites using the latest technologies.
                    </p>
                </div>
                <div className="service-item">
                    <h2 className="service-name">UI/UX Design</h2>
                    <p className="service-description">
                        Designing user-friendly interfaces that enhance user experience.
                    </p>
                </div>
                <div className="service-item">
                    <h2 className="service-name">SEO Optimization</h2>
                    <p className="service-description">
                        Improving website visibility and ranking on search engines.
                    </p>
                </div>
                <div className="service-item">
                    <h2 className="service-name">Content Creation</h2>
                    <p className="service-description">
                        Crafting engaging content tailored to your audience's needs.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Services;
