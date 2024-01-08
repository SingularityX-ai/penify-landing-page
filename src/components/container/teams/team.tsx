import Image from 'next/image';
import usrImg from 'public/images/teams/one.png';

const TeamsContent = [
  {
    devName: 'Stealth Founder - 1',
    devRole: 'Software Engineer',
    devSocial: null,
    // devSocial: 'ssumansaurabh',
  },
  {
    devName: 'Stealth Founder - 2',
    devRole: 'Backend Engineer',
    devSocial: null,
    // devSocial: 'sunilagwl5',
  },
  {
    devName: 'Popin Bose Roy',
    devRole: 'Product Management',
    devSocial: null,
    // devSocial: 'popinboseroy',
  },
  {
    devName: 'Mayur Dayal',
    devRole: 'Frontend Developer',
    devSocial: null,
    // devSocial: 'mayur-dayal',
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
                    src={usrImg}
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
