import React from "react";

const SubscribeLinks = () => {

  return (
    <div className="subscribe-links">
      <p><b>Слушайте и подписывайтесь:</b></p>

      <ul className="sub-list list-unstyled">
        <li><a href="https://podcasts.apple.com/podcast/tehnologii-i-zizn/id1013700516?mt=2">
          <img src="/images/platforms/ApplePodcast-icon.svg" alt="podcast service" />
          <span>Apple Podcasts</span>
          </a>
        </li>
        <li><a href="https://overcast.fm/itunes1013700516">
          <img src="/images/platforms/Overcast-icon.svg" alt="podcast service" />
          <span>Overcast</span>
          </a>
        </li>
        <li><a href="https://www.google.com/podcasts?feed=aHR0cHM6Ly90ZWNobGlmZXBvZGNhc3QuY29tL3BvZGNhc3QtZmVlZC54bWw">
          <img src="/images/platforms/Google-icon.svg" alt="podcast service" />
          <span>Google Podcasts</span>
          </a>
        </li>
        <li><a href="https://castro.fm/podcast/065bcf1c-b1b2-4bee-ab24-288381cf0c85">
          <img src="/images/platforms/Castro-icon.svg" alt="podcast service" />
          <span>Castro</span>
          </a>
        </li>
        <li><a href="//techlifepodcast.com/podcast-feed.xml">
          <img src="/images/platforms/RSS-icon.svg" alt="podcast service" />
          <span>RSS</span>
          </a>
        </li>
        <li><a href="https://open.spotify.com/show/03re4PmocsgPtLBtIxVK4m">
          <img src="/images/platforms/Spotify-icon.svg" alt="podcast service" />
          <span>Spotify</span>
          </a>
        </li>
        <li><a href="https://pca.st/32DX">
          <img src="/images/platforms/Pocketcast-icon.svg" alt="podcast service" />
          <span>Pocketcast</span>
          </a>
        </li>
        <li><a href="https://music.yandex.ru/album/7322142">
          <img src="/images/platforms/YandexMusic-icon.svg" alt="podcast service" />
          <span>Яндекс.Музыка</span>
          </a>
        </li>
        <li><a href="https://castbox.fm/channel/2046306">
          <img src="/images/platforms/CastBox-icon.svg" alt="podcast service" />
          <span>CastBox</span>
        </a>
      </li>
      </ul>
    </div>
  );
}

export default SubscribeLinks;
