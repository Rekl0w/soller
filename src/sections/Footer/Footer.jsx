export default function Footer() {
  return (
    <div className="h-24 flex justify-between items-center px-24">
      <div className="flex items-center justify-center gap-10">
        <img src="/soller.svg" alt="logo" />
        <p>@ 2024 Soller, Inc. All rights reserved.</p>
      </div>
      <div>
        <ul className="flex gap-10 justify-center items-center">
            <li>Terms</li>
            <li>Privacy</li>
            <li>Support</li>
        </ul>
      </div>
    </div>
  );
}
