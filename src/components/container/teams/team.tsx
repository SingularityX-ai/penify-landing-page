import Image from 'next/image';
import sumanImg from 'public/images/teams/suman.jpeg';
import sunilImg from 'public/images/teams/sunil.jpeg';
import popinImg from 'public/images/teams/popin.jpeg';
import mayurImg from 'public/images/teams/mayur.jpeg';

const TeamsContent = [
  {
    img: sumanImg,
    devName: 'Suman Saurabh',
    devRole: 'Co-Founder',
    // devSocial: null,
    devSocial: 'ssumansaurabh',
  },
  {
    img: sunilImg,
    devName: 'Sunil Agarwal',
    devRole: 'Co-Founder',
    // devSocial: null,
    devSocial: 'sunilagwl5',
  },
  {
    img: popinImg,
    devName: 'Popin Bose Roy',
    devRole: 'Co-Founder',
    // devSocial: null,
    devSocial: 'popinboseroy',
  },
  {
    img: mayurImg,
    devName: 'Mayur Dayal',
    devRole: 'Frontend Developer',
    // devSocial: null,
    devSocial: 'mayur-dayal',
  },
];

export default function Teams() {
  return (
    <section className='section team-main pb-0'>
      <div className='container'>
        <div className='row g-4'>
          {TeamsContent.map((team, index) => (
            <div className='col-12 col-md-6 col-lg-3' key={index}>
              <div
                className='colored-card'
                data-aos='fade-up'
                data-aos-duration='600'
                data-aos-delay={index * 200}
              >
                <div className='card-img-center'>
                  <Image
                    src={team.img}
                    width={200}
                    height={200}
                    alt={`Profile photo of ${team.devName}`}
                    priority
                  />
                </div>

                <div className={` card-content-wrapper ${!team.devSocial ? "link-disabled" : "" }`}>
                  <div className='card-content'>
                    <div className='card-devData'>
                      <h3 className='h5 mb-1'>{team.devName}</h3>
                      <p className='text-muted'>{team.devRole}</p>
                    </div>

                    {team.devSocial ? (
                      <a
                        href={`https://www.linkedin.com/in/${team.devSocial}/`}
                        target='_blank'
                        rel='noopener noreferrer'
                        className='socials'
                      >
                        <i className='fa-brands fa-linkedin-in'></i>
                      </a>
                    ) : (
                     ""
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
