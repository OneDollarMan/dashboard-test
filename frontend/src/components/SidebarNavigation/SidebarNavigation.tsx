import React from 'react';
import './SidebarNavigation.css';
import '@/style/globals.css'

const SidebarNavigation = () => {
  return (
    <nav className="sidebar div-style">
      <ul className='sidebar-ul'>
        <li className='sidebar-li li_active'>
          <div className='li-icon'>
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" className="bi bi-grid-fill" viewBox="0 0 16 16">
              <path d="M1 2.5A1.5 1.5 0 0 1 2.5 1h3A1.5 1.5 0 0 1 7 2.5v3A1.5 1.5 0 0 1 5.5 7h-3A1.5 1.5 0 0 1 1 5.5v-3zm8 0A1.5 1.5 0 0 1 10.5 1h3A1.5 1.5 0 0 1 15 2.5v3A1.5 1.5 0 0 1 13.5 7h-3A1.5 1.5 0 0 1 9 5.5v-3zm-8 8A1.5 1.5 0 0 1 2.5 9h3A1.5 1.5 0 0 1 7 10.5v3A1.5 1.5 0 0 1 5.5 15h-3A1.5 1.5 0 0 1 1 13.5v-3zm8 0A1.5 1.5 0 0 1 10.5 9h3a1.5 1.5 0 0 1 1.5 1.5v3a1.5 1.5 0 0 1-1.5 1.5h-3A1.5 1.5 0 0 1 9 13.5v-3z"/>
            </svg>
          </div>
          <div className='li-text'>
            Показатели
          </div>
        </li>
        <li className='sidebar-li'>
          <div className='li-icon'>
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" className="bi bi-graph-down-arrow" viewBox="0 0 16 16">
              <path fillRule="evenodd" d="M0 0h1v15h15v1H0V0Zm10 11.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5v-4a.5.5 0 0 0-1 0v2.6l-3.613-4.417a.5.5 0 0 0-.74-.037L7.06 8.233 3.404 3.206a.5.5 0 0 0-.808.588l4 5.5a.5.5 0 0 0 .758.06l2.609-2.61L13.445 11H10.5a.5.5 0 0 0-.5.5Z"/>
            </svg>
          </div>
          <div className='li-text'>
            Потери
          </div>
        </li>
        <li className='sidebar-li'>
          <div className='li-icon'>
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" className="bi bi-clipboard2-check" viewBox="0 0 16 16">
              <path d="M9.5 0a.5.5 0 0 1 .5.5.5.5 0 0 0 .5.5.5.5 0 0 1 .5.5V2a.5.5 0 0 1-.5.5h-5A.5.5 0 0 1 5 2v-.5a.5.5 0 0 1 .5-.5.5.5 0 0 0 .5-.5.5.5 0 0 1 .5-.5h3Z"/>
              <path d="M3 2.5a.5.5 0 0 1 .5-.5H4a.5.5 0 0 0 0-1h-.5A1.5 1.5 0 0 0 2 2.5v12A1.5 1.5 0 0 0 3.5 16h9a1.5 1.5 0 0 0 1.5-1.5v-12A1.5 1.5 0 0 0 12.5 1H12a.5.5 0 0 0 0 1h.5a.5.5 0 0 1 .5.5v12a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5v-12Z"/>
              <path d="M10.854 7.854a.5.5 0 0 0-.708-.708L7.5 9.793 6.354 8.646a.5.5 0 1 0-.708.708l1.5 1.5a.5.5 0 0 0 .708 0l3-3Z"/>
            </svg>
          </div>
          <div className='li-text'>
            Навыки
          </div>
        </li>
        <li className='sidebar-li'>
          <div className='li-icon'>
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" className="bi bi-cash-stack" viewBox="0 0 16 16">
              <path d="M1 3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1H1zm7 8a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"/>
              <path d="M0 5a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V5zm3 0a2 2 0 0 1-2 2v4a2 2 0 0 1 2 2h10a2 2 0 0 1 2-2V7a2 2 0 0 1-2-2H3z"/>
            </svg>
          </div>
          <div className='li-text'>
            Продажи NEW
          </div>
        </li>
        <li className='sidebar-li'>
          <div className='li-icon'>
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" className="bi bi-cash-stack" viewBox="0 0 16 16">
              <path d="M1 3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1H1zm7 8a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"/>
              <path d="M0 5a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V5zm3 0a2 2 0 0 1-2 2v4a2 2 0 0 1 2 2h10a2 2 0 0 1 2-2V7a2 2 0 0 1-2-2H3z"/>
            </svg>
          </div>
          <div className='li-text'>
            Продажи
          </div>
        </li>
        <li className='sidebar-li'>
          <div className='li-icon'>
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" className="bi bi-clipboard2-data-fill" viewBox="0 0 16 16">
              <path d="M10 .5a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5.5.5 0 0 1-.5.5.5.5 0 0 0-.5.5V2a.5.5 0 0 0 .5.5h5A.5.5 0 0 0 11 2v-.5a.5.5 0 0 0-.5-.5.5.5 0 0 1-.5-.5Z"/>
              <path d="M4.085 1H3.5A1.5 1.5 0 0 0 2 2.5v12A1.5 1.5 0 0 0 3.5 16h9a1.5 1.5 0 0 0 1.5-1.5v-12A1.5 1.5 0 0 0 12.5 1h-.585c.055.156.085.325.085.5V2a1.5 1.5 0 0 1-1.5 1.5h-5A1.5 1.5 0 0 1 4 2v-.5c0-.175.03-.344.085-.5ZM10 7a1 1 0 1 1 2 0v5a1 1 0 1 1-2 0V7Zm-6 4a1 1 0 1 1 2 0v1a1 1 0 1 1-2 0v-1Zm4-3a1 1 0 0 1 1 1v3a1 1 0 1 1-2 0V9a1 1 0 0 1 1-1Z"/>
            </svg>
          </div>
          <div className='li-text'>
            Вечерний отчет
          </div>
        </li>
      </ul>
      <div className="exit">
        <div className='li-icon'>
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" className="bi bi-box-arrow-right" viewBox="0 0 16 16">
            <path fillRule="evenodd" d="M10 12.5a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v2a.5.5 0 0 0 1 0v-2A1.5 1.5 0 0 0 9.5 2h-8A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-2a.5.5 0 0 0-1 0v2z"/>
            <path fillRule="evenodd" d="M15.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L14.293 7.5H5.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3z"/>
          </svg>
        </div>
        <div className='li-text'>
          Выход
        </div>
      </div>
    </nav>
  );
};

export default SidebarNavigation;