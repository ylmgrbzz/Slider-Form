import "./App.css";
import Form from "./components/Form";
function App() {
	return (
		<div className="container-fluid">
			<div className="row">
				<div className="col-1 sol"></div>
				<div className="col-5 sol p-0 pt-4 ">
					<h1 className="text-white b1">MEHR</h1>
					<h1 className="text-white">SICHBARKEIT</h1>
					<h1 className="text-white">MIT</h1>
					<h1 className="bg-white turuncu">SICHTFILM<small><sup>®</sup></small></h1>
					<div className="alt">
						<img width="100px" src='/images/logo.png' />
						<p className="footer-link">
							<a href="#">Abbrechen <span>|</span></a>
							<a href="#">Impressum <span>|</span></a>
							<a href="#">Datenschutzerklarung</a>
						</p>
					</div>
				</div>
				<div className="col-6 saf py-5 px-1">
					<div className="d1 mx-auto">
						<div className="d2 mx-auto">
							<Form />
						</div>
						<div className="row p-0">
							<div className="col-4 pb-3 dalt">
								<div className="alticon mx-auto">
									<img width="100%" src="/images/icon1.png" />

								</div>
								<div className="text-center mx-auto cizgi">
									<p className="iconyazi mt-2">Wir erklaren Ihr Angebot in Sekunden</p>
								</div>

							</div>
							<div className="col-4"></div>
							<div className="col-4 pb-3 dalt">
								<div className="alticon mx-auto">
									<img width="100%" src="/images/icon2.png" />
								</div>
								<div className="text-center mx-auto cizgi">
									<p className="iconyazi mt-2">Wir erhdhen Ihre Sichtbarkeit</p>
								</div>

							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default App;
/*
<div classNameName="App">
	  <Form />
	</div>
	*/