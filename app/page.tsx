export default function Home() {
  return (
    <div className="h-full flex items-center justify-center flex-row gap-16">
      <picture>
        <source media="(prefers-color-scheme: light)" srcSet="https://i.ibb.co/yBhBsGyf/Group-11-1.png"></source>
        <source media="(prefers-color-scheme: dark)" srcSet="https://i.ibb.co/4R9q41hn/Group-11.png"></source>
        <img src={`https://i.ibb.co/yBhBsGyf/Group-11-1.png`} alt="Spicetown Logo" width={0} height={0} className="w-auto h-16"></img>
      </picture>
      <a href="https://chromewebstore.google.com/detail/Spicetown/kbcbgiihiopcbgimdopcfcemikagemgl"><img src={`./chromewebstore-badge.png`} className="w-auto h-12"></img></a>
    </div>
  );
}
