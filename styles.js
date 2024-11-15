/* General Styles */
body {
    font-family: 'Nunito', sans-serif;
    margin: 0;
    padding: 0;
    background-color: #f7f7f7;
    color: #333;
    line-height: 1.6;
    scroll-behavior: smooth;
}

h1, h2, h3, h4, h5, h6 {
    color: #333;
    margin-bottom: 20px;
}

p {
    margin-bottom: 20px;
}

img {
    max-width: 100%;
    height: auto;
    border-radius: 10px;
}

/* Header */
header {
    background-color: #4facfe;
    padding: 20px;
    text-align: center;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.logo {
    max-width: 300px;
    width: 100%;
    margin-bottom: 10px;
}

.header-container h1 {
    font-size: 2.5rem;
    font-weight: 800;
}

.header-container .tagline {
    font-size: 1.2rem;
    font-weight: 600;
}

/* Navigation */
nav {
    background-color: #333;
    padding: 15px;
    position: sticky;
    top: 0;
    z-index: 1000;
}

nav ul {
    list-style: none;
    padding: 0;
    display: flex;
    justify-content: center;
    margin: 0;
}

nav ul li {
    margin: 0 15px;
}

nav ul li a {
    color: #fff;
    text-decoration: none;
    font-weight: 600;
    transition: color 0.3s ease;
}

nav ul li a:hover {
    color: #ff7f50;
}

/* Hero Section */
.hero-section {
    padding: 100px 20px;
    text-align: center;
    background: linear-gradient(to bottom, #4facfe, #00f2fe);
    color: #fff;
    position: relative;
}

.hero-text h2 {
    font-size: 3em;
    margin-bottom: 20px;
}

/* About Section */
.about-section {
    padding: 60px 20px;
    background-color: #ffffff;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
    margin: 40px auto;
    border-radius: 12px;
    max-width: 800px;
    text-align: center;
}

/* Life's GOOD Section */
.lifesgood-section {
    padding: 60px 20px;
    background-color: #ffffff;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
    margin: 40px auto;
    border-radius: 12px;
    max-width: 800px;
    text-align: center;
}

.featured-image {
    margin-top: 20px;
}

/* Tips, Tricks, & Tech Section */
.tips-tricks-tech-section {
    padding: 60px 20px;
    background: #f9f9f9;
    margin: 40px auto;
    border-radius: 12px;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
    max-width: 800px;
    text-align: center;
}

/* Video Section Placeholder */
.video-section {
    padding: 60px 20px;
    background-color: #ffffff;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
    margin: 40px auto;
    border-radius: 12px;
    max-width: 800px;
    text-align: center;
}

/* Footer */
.footer-container {
    background: #333;
    color: #fff;
    padding: 40px;
    text-align: center;
}

.footer-container ul {
    list-style: none;
    padding: 0;
    display: flex;
    justify-content: center;
    gap: 20px;
    margin: 20px 0 0;
}

.footer-container ul li a {
    color: #fff;
    text-decoration: none;
    transition: color 0.3s ease;
}

.footer-container ul li a:hover {
    color: #ff7f50;
}

/* Utility Classes */
.text-center {
    text-align: center;
}

.mt-20 {
    margin-top: 20px;
}

.mb-20 {
    margin-bottom: 20px;
}

