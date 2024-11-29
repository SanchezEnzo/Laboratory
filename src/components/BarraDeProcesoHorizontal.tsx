export function BarraDeProcesoHorizontal() {
  return (
    <>
      <div className='animate-progress-grow timeline-scroll fixed top-0 w-[0%] bg-red-500 h-2'></div>
      <div className='w-full max-[700px] flex flex-col items-center gap-10 pt-10 '>
        <header>
          <h1 className='text-4xl font-bold'>Los Avengers</h1>
        </header>
        <section className='flex flex-col gap-5'>
          <div>
            <h2 className='text-xl font-semibold'>Iron Man</h2>
            <img
              src='https://media.revistagq.com/photos/5ec50516affc6618c4a2fd30/16:9/w_1920,c_limit/iron-man-2008.jpg'
              alt='Iron Man'
              width='700'
            />
            <p>
              Iron Man, también conocido como Tony Stark, es un genio inventor y
              multimillonario.
            </p>
          </div>
          <div>
            <h2 className='text-xl font-semibold'>Capitán América</h2>
            <img
              src='https://i0.wp.com/imgs.hipertextual.com/wp-content/uploads/2019/05/hipertextual-avengers-endgame-futuro-capitan-america-2019781893-scaled.jpg?resize=2048%2C1280&quality=55&strip=all&ssl=1'
              alt='Capitán América'
              width='700'
            />
            <p>
              El Capitán América, también conocido como Steve Rogers, es un
              supersoldado de la Segunda Guerra Mundial.
            </p>
          </div>
          <div>
            <h2 className='text-xl font-semibold'>Thor</h2>
            <img
              src='https://img2.rtve.es/i/?w=1600&i=1585840423850.jpg'
              alt='Thor'
              width='700'
            />
            <p>
              Thor es el dios del trueno, hijo de Odín, y un miembro clave de
              los Avengers.
            </p>
          </div>
          <div>
            <h2 className='text-xl font-semibold'>Hulk</h2>
            <img
              src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Hulk_%282540708438%29.jpg/480px-Hulk_%282540708438%29.jpg'
              alt='Hulk'
              width='700'
            />
            <p>
              Hulk, también conocido como Bruce Banner, se transforma en un
              gigante verde cuando se enfurece.
            </p>
          </div>
          <div>
            <h2 className='text-xl font-semibold'>Viuda Negra</h2>
            <img
              src='https://i0.wp.com/imgs.hipertextual.com/wp-content/uploads/2021/03/viuda-negra-scaled.jpg?resize=2048%2C1284&quality=55&strip=all&ssl=1'
              alt='Viuda Negra'
              width='700'
            />
            <p>
              Viuda Negra, también conocida como Natasha Romanoff, es una espía
              altamente entrenada.
            </p>
          </div>

          <div>
            <h2 className='text-xl font-semibold'>Ojo de Halcón</h2>
            <img
              src='https://cdn.computerhoy.com/sites/navi.axelspringer.es/public/media/image/2021/11/ojo-halcon-2543827.jpg?tf=1920x'
              alt='Ojo de Halcón'
              width='700'
            />
            <p>
              Ojo de Halcón, también conocido como Clint Barton, es un arquero
              experto con una puntería perfecta.
            </p>
          </div>
        </section>
      </div>
    </>
  )
}
