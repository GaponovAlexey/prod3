import React from 'react'

export const Footer = () => {
  return (
    <div>
      <footer className='page-footer cyan lighten-2 '>
      
        <div className='footer-copyright'>
          <div className='container'>
            © { new Date().toLocaleDateString()} Copyright Text
            <a className='grey-text text-lighten-4 right' href='https://github.com/kekelberi/prod3'>
              Repo Git
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}
