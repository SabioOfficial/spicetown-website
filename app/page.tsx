export default function Home() {
  return (
    <div className="flex h-full flex-col gap-16 items-center justify-center">
      <div className="flex flex-row gap-16">
        <picture>
          <source media="(prefers-color-scheme: light)" srcSet="https://i.ibb.co/yBhBsGyf/Group-11-1.png"></source>
          <source media="(prefers-color-scheme: dark)" srcSet="https://i.ibb.co/4R9q41hn/Group-11.png"></source>
          <img src={`https://i.ibb.co/yBhBsGyf/Group-11-1.png`} alt="Spicetown Logo" width={0} height={0} className="w-auto h-16"></img>
        </picture>
        <a href="https://chromewebstore.google.com/detail/Spicetown/kbcbgiihiopcbgimdopcfcemikagemgl"><img src={`./chromewebstore-badge.png`} className="w-auto h-12"></img></a>
      </div>
      <div className="flex flex-row gap-16">
        <picture>
          <source media="(prefers-color-scheme: light)" srcSet="https://i.ibb.co/B5vswjX3/Group-15.png"></source>
          <source media="(prefers-color-scheme: dark)" srcSet="https://i.ibb.co/TMXsSN8b/Group-16.png"></source>
          <img src={`https://i.ibb.co/B5vswjX3/Group-15.png`} alt="Spicetown Logo" width={0} height={0} className="w-auto h-16"></img>
        </picture>
        <a href="https://github.com/SabioOfficial/spicetown/actions/runs/20482008455/artifacts/4960053165">
          <picture>
            <source media="(prefers-color-scheme: light)" srcSet="./github-mark.png"></source>
            <source media="(prefers-color-scheme: dark)" srcSet="./github-mark-white.png"></source>
            <img src={`./github-mark.png`} className="w-auto h-12"></img>
          </picture>
        </a>
      </div>
    </div>
  );
}
