/* eslint-disable @next/next/no-img-element */
'use client'

export default function ChannelCards() {
  const channels = [
    {
      name: 'Email',
      imageUrl:
        'https://upload.wikimedia.org/wikipedia/commons/7/7e/Gmail_icon_%282020%29.svg',
      description:
        'Send notifications via email using the SMTP protocol to keep track of your workflow status.',
    },
    {
      name: 'Slack',
      imageUrl:
        'https://upload.wikimedia.org/wikipedia/commons/d/d5/Slack_icon_2019.svg',
      description: 'Send notifications to a Slack channel using a webhook URL.',
    },
    {
      name: 'Discord',
      imageUrl: 'https://www.svgrepo.com/show/353655/discord-icon.svg',
      description:
        'Send notifications to a Discord channel using a webhook URL.',
    },
    {
      name: 'Telegram',
      imageUrl:
        'https://upload.wikimedia.org/wikipedia/commons/8/82/Telegram_logo.svg',
      description:
        'Send notifications to a Telegram channel using a bot token and chat ID.',
    },
  ]
  return (
    <>
      <div className="hero bg-base-200 flex flex-col justify-center items-center py-12">
        <div className="hero-content text-center flex flex-col justify-center items-start w-11/12 sm:w-10/12 md:w-8/12 mb-6">
          <div className="text-3xl sm:text-4xl lg:text-5xl font-bold ">
            Supported Channels
          </div>
          <div className="py-1 text-base-content/50 text-start">
            Send notifications to the following channels
          </div>

          <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-4 py-4">
            {channels.map((channel, index) => (
              <div className="card bg-base-100 w-full shadow-lg" key={index}>
                <div className="card-body flex flex-col justify-start items-start">
                  <figure className="w-1/10 my-2">
                    <img src={channel.imageUrl} alt="Shoes" />
                  </figure>
                  <h2 className="card-title text-3xl my-2 font-bold text-start">
                    {channel.name}
                  </h2>
                  <p className="text-base-content/75 text-start">
                    {channel.description}
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
