
import './App.css';

function App() {
  return (
    <main>
      <h1>Our Pricing</h1>


      <div className='all'>
        <div className="switch">
          <p>Annually</p>
          <div>
            <label className="switch">
              <input type="checkbox"/>
              <span className="slider round"></span>
            </label>
          </div>
          <p>Monthly</p>
        </div>
        <section>
          <article className="price first">
            <p>Basic</p>
            <div>
              <p>$</p>
              <h1>199.99</h1>
            </div>
            
            <hr/>
            <ul>
              <li>500 GB Storage</li>
              <hr/>
              <li>2 user allowed</li>
              <hr/>
              <li>Send up to 3 GB</li>
              <hr/>
            </ul>
            <button>LEARN MORE</button>
          </article>
          <article className="price second">
            <p>Professional</p>
            <div>
              <p>$</p>
              <h1>249.99</h1>
            </div>
            <hr/>
            <ul>
              <li>1 TB Storage</li>
              <hr/>
              <li>5 user allowed</li>
              <hr/>
              <li>Send up to 10 GB</li>
              <hr/>
            </ul>
            <button>LEARN MORE</button>
          </article>
          <article className="price first">
            <p>Master</p>
            <div>
              <p>$</p>
              <h1>399.99</h1>
            </div>
            
            <hr/>
            <ul>
              <li>2 TB Storage</li>
              <hr/>
              <li>10 user allowed</li>
              <hr/>
              <li>Send up to 20 GB</li>
              <hr/>
            </ul>
            <button>LEARN MORE</button>
          </article>
        </section>
      </div>
    </main>
  );
}

export default App;
