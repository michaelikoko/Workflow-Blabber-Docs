export default function Footer() {
  return (
    <footer className="footer sm:footer-horizontal footer-center bg-base-300 text-base-content py-10">
      <aside>
        <p> © {new Date().getFullYear()} - Workflow Blabber</p>
      </aside>
    </footer>
  )
}
