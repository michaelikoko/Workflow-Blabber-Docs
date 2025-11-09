/* eslint-disable @next/next/no-img-element */
'use client'

export default function FeatureCards() {
  const features = [
    {
      name: 'Multi-Platform Support',
      imageUrl: 'https://cdn.simpleicons.org/discord/5865F2',
      description:
        'Discord, Telegram, Slack, and Email in one action. No need to install separate actions for each service.',
    },
    {
      name: 'Smart Formatting',
      imageUrl: 'https://cdn.simpleicons.org/prettier/F7B93E',
      description:
        'Automatic platform-specific formatting with Discord embeds, Telegram markdown, and Slack blocks.',
    },
    {
      name: 'Zero Configuration',
      imageUrl: 'https://cdn.simpleicons.org/lightning/FFD700',
      description:
        'Minimal YAML config with sensible defaults. Add your webhook URL and you\'re done.',
    },
    {
      name: 'Context-Aware',
      imageUrl: 'https://cdn.simpleicons.org/githubactions/2088FF',
      description:
        'Auto-includes commit info, branch, author, and workflow status without extra configuration.',
    },
    {
      name: 'Custom Messages',
      imageUrl: 'https://cdn.simpleicons.org/markdown/000000',
      description:
        'Override default messages and add custom fields to tailor notifications to your team\'s needs.',
    },
    {
      name: 'Secure by Default',
      imageUrl: 'https://cdn.simpleicons.org/letsencrypt/003A70',
      description:
        'Uses GitHub secrets for credentials. Your webhook URLs and tokens never get exposed in logs.',
    },
  ]
  return (
    <>
      <div className="hero bg-base-100 flex flex-col justify-center items-center py-12">
        <div className="hero-content text-center flex flex-col justify-center items-start w-11/12 sm:w-10/12 md:w-8/12 mb-6">
          <div className="text-3xl sm:text-4xl lg:text-5xl font-bold ">
            Features
          </div>
          <div className="py-1 text-base-content/50 text-start">
            Powerful notification features to keep your team informed
          </div>

          <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-4 py-4">
            {features.map((feature, index) => (
              <div className="card bg-base-200 w-full shadow-lg" key={index}>
                <div className="card-body flex flex-col justify-start items-start">
                  <figure className="w-1/10 my-2">
                    <img src={feature.imageUrl} alt="Shoes" />
                  </figure>
                  <h2 className="card-title text-3xl my-2 font-bold text-start">
                    {feature.name}
                  </h2>
                  <p className="text-base-content/75 text-start">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
