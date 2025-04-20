# Modern Portfolio

This is a modern web portfolio designed for designers, photographers, and other creatives who want to showcase their projects. The portfolio includes featured sections such as "Projects", "Contact", and an image carousel. Additionally, it has the ability to toggle between light and dark modes.

## Features

- **Dark Mode**: Toggle between light and dark themes for a better visual experience.
- **Project Carousel**: A slideshow (Swiper) to showcase project images interactively.
- **Contact Form**: For visitors to send you messages.
- **Responsive Design**: Adapts to different screen sizes, from mobile devices to desktops.

## Live Demo

You can view the live portfolio here:  
[Live Portfolio](https://mayragutierrezc16.github.io/portfolio-online/)

## Repository

Find the source code for this portfolio on GitHub:  
[GitHub Repository](https://github.com/mayragutierrezc16/portfolio-online)

## Technologies Used

- **HTML**: Content structure.
- **CSS**: Styles and responsive design.
- **JavaScript**: Dynamic functionality, including theme switching and carousel activation.
- **Swiper**: Library for the project carousel.

## Installation

1. **Clone the repository**:

   ```bash
   git clone https://github.com/mayragutierrezc16/portfolio-online.git
   ```

2. **Navigate to the project folder**:

   ```bash
   cd portfolio-online
   ```

3. **Open the `index.html` file in your browser** to see the portfolio in action.

## Customization

1. **Change project images**: 
   - Go to the `assets/` folder and replace the images with the ones you want to display in the carousel.

2. **Modify portfolio text**:
   - Open the `index.html` file and edit the text in sections like the "tagline", "description", and "footer".

3. **Change theme colors**:
   - In the `style.css` file, you can modify variables like `--bg-color`, `--text-color`, `--accent-color`, among others, to customize the colors of your portfolio.

## Dark Mode Usage

The site has a button to toggle between light and dark modes. The selected theme is saved in `localStorage`, so the last theme preference will be remembered.

### To enable dark mode:

1. Click on the sun icon 🌞 in the header. This will switch the theme to dark.
2. The icon will change to a moon 🌙 and you can revert the change.

## Contributing

If you would like to contribute to the project, please follow these steps:

1. **Fork the repository**.
2. **Create a feature branch**:
   ```bash
   git checkout -b my-new-feature
   ```
3. **Make your changes**.
4. **Commit your changes**:
   ```bash
   git commit -am 'Added a new feature'
   ```
5. **Push your changes**:
   ```bash
   git push origin my-new-feature
   ```
