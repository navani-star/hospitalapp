import React from 'react'
import '../Pages/home.css'
import Slide from '../Assets/banner.jpg'
import Slide1 from '../Assets/about.jpg'
const Home = () => {
  return (
    <div>
      <div className='bg-dark'>
        <img src={Slide} alt='Slide1' width={1420} height={600} />
      </div>
        <table>
          <tr>
            <td>
              <h1 className='home'>HOME PAGE</h1>
              <p>
                Health care, or healthcare, is the improvement of health via the prevention, diagnosis, treatment, amelioration or cure of disease, illness, injury, and other physical and mental impairments in people. Health care is delivered by health professionals and allied health fields. Medicine, dentistry, pharmacy, midwifery, nursing, optometry, audiology, psychology, occupational therapy, physical therapy, athletic training, and other health professions all constitute health care. The term includes work done in providing primary care, secondary care, and tertiary care, as well as in public health. Access to healthcare may vary across countries, communities, and individuals, influenced by social and economic conditions as well as health policies. Providing health care services means "the timely use of personal health services to achieve the best possible health outcomes". Factors to consider in terms of healthcare access include financial limitations (such as insurance coverage), geographical and logistical barriers (such as additional transportation costs and the ability to take paid time off work to use such services), sociocultural expectations, and personal limitations (lack of ability to communicate with health care providers, poor health literacy, low income). Limitations to health care services affect negatively the use of medical services, the efficacy of treatments, and overall outcome (well-being, mortality rates).
              </p>
            </td>
            <td>
              <img src={Slide1} alt='Slide1' width={600} height={450} />
            </td>
          </tr>
        </table>
      
    </div>
  )
}
export default Home