import TitleBlock from "../../components/titleBlock/titleBlock"
import PageContent from "../../modules/pageContent/pageContent"
import PageMarking from "../../modules/pageMarking/pageMarking"

import styles from "./mainPage.module.scss"

const MainPage = () => {
  return (
    <>
      <div className={styles.pageWrap}>
        <PageMarking />
        <PageContent />
      </div>
    </>
  )
}

export default MainPage
