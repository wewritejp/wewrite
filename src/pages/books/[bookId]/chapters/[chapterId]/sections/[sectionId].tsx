import Layout from "src/core/layouts/Layout"
import SectionContent from "src/sections/components/SectionContent"
import SectionSidebar from "src/sections/components/SectionSidebar"

const ShowSectionPage = () => {
  return (
    <Layout title="">
      <div className="md:grid md:grid-cols-12 h-full ">
        <div className="md:col-span-3">
          <SectionSidebar />
        </div>
        <div className="md:col-span-9">
          <SectionContent />
        </div>
      </div>
    </Layout>
  )
}

export default ShowSectionPage
