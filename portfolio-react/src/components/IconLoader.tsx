import { useEffect } from 'react';

const IconLoader: React.FC = () => {
  useEffect(() => {
    // Crear los SVG inline directamente en el DOM
    const svgContainer = document.createElement('div');
    svgContainer.style.display = 'none';
    svgContainer.innerHTML = `
      <svg xmlns="http://www.w3.org/2000/svg">
        <symbol id="icon-ecbd7520f72820fb3c1bfce19d8ed9ce" viewBox="0 0 24 24">
          <path d="M7 10L12 15L17 10"></path>
        </symbol>
        <symbol id="icon-80dc50be409b6c0a58c1f62335c07e7d" viewBox="0 0 24 24">
          <path d="M9 18L15 12L9 6"></path>
        </symbol>
        <symbol id="icon-bf393d6ea48a4e69e1ed58a3563b94a5" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </symbol>
      </svg>
    `;
    
    document.body.insertBefore(svgContainer, document.body.firstChild);
    
    return () => {
      // Cleanup cuando el componente se desmonte
      if (svgContainer.parentNode) {
        svgContainer.parentNode.removeChild(svgContainer);
      }
    };
  }, []);

  return null;
};

export default IconLoader;