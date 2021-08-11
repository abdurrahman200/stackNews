import headerStyles from '../styles/Header.module.css'

const Header = () => {
   return (
      <div>
         <h1 className={headerStyles.title}>
            <span>Stack</span> News
         </h1>
         <p className={headerStyles.description}>Keep up to date with the latest stack News</p>
      </div>
   )
}

export default Header
