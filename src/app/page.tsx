export default function Home() {
  return (
    <main className="flow">
      <section className="flow mb-36">
        <div className="pt-24 flow max-w-prose mx-auto text-center">
          <h1>NextJS & Tailwind Starter</h1>
          <p>
            Edit <code>src/app/page.tsx</code> to get started.
          </p>
        </div>
      </section>
      <section className="flow mb-16">
        <div className="flow max-w-prose mx-auto">
          <h2>More about this starter</h2>
          <p>
            I created this started solely for myself to have a better and faster
            jumping off point on new NextJS projects. While it <em>largely</em>{" "}
            un-opinionated, that does not mean there are zero opinions.
          </p>
          <p>
            This starter template <em>may</em> grow a bit with styles and
            components that match my desired style. You can, of course, change
            whatever you would like in the appropriate folders. But to begin
            with this starter features:
          </p>
          <ul className="ml-10 list-disc">
            <li>
              <p>Poppins Google Font</p>
            </li>
            <li>
              <p>Responsive font-sizing</p>
            </li>
            <li>
              <p>
                Responsive element spacing due to the addition of the{" "}
                <code>.flow</code> class
              </p>
            </li>
            <li>
              <p>Basic light and dark mode</p>
            </li>
          </ul>
        </div>
      </section>
      <section className="flow mb-16">
        <div className="flow max-w-prose mx-auto">
          <h2>
            The <code>.flow</code> Class
          </h2>
          <p>
            Here is a quick breakdown of the <code>.flow</code> class:
          </p>
          <ol className="list-decimal ml-10">
            <li>
              <p>Help manage flow and rhythm of elements.</p>
            </li>
            <li>
              <p>
                Every direct sibling child element of has{" "}
                <code>margin-block-start</code>
                added to it.
              </p>
            </li>
            <li>
              <p>
                Uses <code>1em</code> as a fallback from clamp syntax.
              </p>
            </li>
          </ol>
        </div>
      </section>
    </main>
  );
}
