import Container from "../layout/Container.js";

const Home = {
    template: `
    <container>
    <main>
        <!-- Page Header Start -->
        <div class="container-fluid page-header mb-5 wow fadeIn" data-wow-delay="0.1s">
            <div class="container">
                <h1 class="display-3 mb-4 animated slideInDown">Competenze</h1>
                <nav aria-label="breadcrumb animated slideInDown">
                    <ol class="breadcrumb mb-0">
                        <li class="breadcrumb-item"><a href="./index.html">Home</a></li>
                        <li class="breadcrumb-item active" aria-current="page">Competenze</li>
                    </ol>
                </nav>
            </div>
        </div>
        <!-- Page Header End -->


        <!-- Service Start -->
        <div class="container-xxl service py-5">
            <div class="container">
                <div class="text-center mx-auto wow fadeInUp" data-wow-delay="0.1s" style="max-width: 600px;">
                    <p class="d-inline-block border rounded text-primary fw-semi-bold py-1 px-3">Le Nostre Competenze
                    </p>
                    <h1 class="display-5 mb-5">Le nostre competenze al tuo servizio</h1>
                </div>
                <div class="row g-4 wow fadeInUp" data-wow-delay="0.3s">
                    <div class="col-lg-4">
                        <div class="nav nav-pills d-flex justify-content-between w-100 h-100 me-4">
                            <button class="nav-link w-100 d-flex align-items-center text-start border p-4 mb-4 active"
                                style="height: 75px;" data-bs-toggle="pill" data-bs-target="#tab-pane-1" type="button">
                                <h5 class="d-flex align-items-center m-0"><i
                                        class="fa fa-bars text-primary me-3"></i>D.Lgs
                                    231/01</h5>
                            </button>
                            <button class="nav-link w-100 d-flex align-items-center text-start border p-4 mb-4"
                                style="height: 75px;" data-bs-toggle="pill" data-bs-target="#tab-pane-2" type="button">
                                <h5 class="m-0"><i class="fa fa-bars text-primary me-3"></i>Privacy</h5>
                            </button>
                            <button class="nav-link w-100 d-flex align-items-center text-start border p-4 mb-4"
                                style="height: 75px;" data-bs-toggle="pill" data-bs-target="#tab-pane-3" type="button">
                                <h5 class="m-0"><i class="fa fa-bars text-primary me-3"></i>Audit ISO 9001</h5>
                            </button>
                            <button class="nav-link w-100 d-flex align-items-center text-start border p-4 mb-0"
                                style="height: 75px;" data-bs-toggle="pill" data-bs-target="#tab-pane-4" type="button">
                                <h5 class="m-0"><i class="fa fa-bars text-primary me-3"></i>Licensing</h5>
                            </button>
                        </div>
                    </div>
                    <div class="col-lg-8">
                        <div class="tab-content w-100">
                            <div class="tab-pane fade show active" id="tab-pane-1">
                                <div class="row g-4">
                                    <div class="col-md-6" style="min-height: 350px;">
                                        <div class="position-relative h-100">
                                            <img class="position-absolute rounded w-100 h-100" src="./img/service-1.jpg"
                                                style="object-fit: cover;" alt="">
                                        </div>
                                    </div>
                                    <div class="col-md-6" style="height: 400px;">
                                        <h3 class="mb-4">D.Lgs 231/01 e Responsabilità Amministrativa</h3>
                                        <p class="mb-2">Le nostre competenze e attività in materia della
                                            <strong>Responsabilità amministrativa delle società e degli enti (D.Lgs
                                                231/01)</strong> sono:
                                        </p>
                                        <p><i class="fa fa-check text-primary me-3"></i>Analisi e Gestione del Rischio
                                        </p>
                                        <p><i class="fa fa-check text-primary me-3"></i>Organizzazione del sistema di
                                            deleghe e responsabilità</p>
                                        <p><i class="fa fa-check text-primary me-3"></i>Formazione e Vigilanza</p>
                                        <a href="#dlgs-ra" class="btn btn-primary py-3 px-5 mt-3">Scopri di più</a>
                                    </div>
                                </div>
                            </div>
                            <div class="tab-pane fade" id="tab-pane-2">
                                <div class="row g-4">
                                    <div class="col-md-6" style="min-height: 350px;">
                                        <div class="position-relative h-100">
                                            <img class="position-absolute rounded w-100 h-100" src="./img/service-2.jpg"
                                                style="object-fit: cover;" alt="">
                                        </div>
                                    </div>
                                    <div class="col-md-6" style="height: 400px;">
                                        <h3 class="mb-4">Privacy</h3>
                                        <p class="mb-4">Le nostre competenze e attività in materia ci consentono di
                                            affrontare le problematiche ordinarie in ogni settore lavorativo, come ad
                                            esempio: </p>
                                        <p><i class="fa fa-check text-primary me-3"></i>Area Medico-Sanitario</p>
                                        <p><i class="fa fa-check text-primary me-3"></i>Aggiunger eltro settore in cui
                                            c'è
                                            mercato</p>
                                        <p><i class="fa fa-check text-primary me-3"></i>Aggiunger eltro settore in cui
                                            c'è
                                            mercato</p>
                                        <p><i class="fa fa-check text-primary me-3"></i>Aggiunger eltro settore in cui
                                            c'è
                                            mercato</p>
                                        <a href="#privicy" class="btn btn-primary py-3 px-5 mt-3">Scopri di più</a>
                                    </div>
                                </div>
                            </div>
                            <div class="tab-pane fade" id="tab-pane-3">
                                <div class="row g-4">
                                    <div class="col-md-6" style="min-height: 350px;">
                                        <div class="position-relative h-100">
                                            <img class="position-absolute rounded w-100 h-100" src="img/service-3.jpg"
                                                style="object-fit: cover;" alt="">
                                        </div>
                                    </div>
                                    <div class="col-md-6" style="height: 400px;">
                                        <h3 class="mb-4">Audit ISO 9001</h3>
                                        <p class="mb-4">Le nostre competenze e attività in materia ci consentono di
                                            affiancare l’azienda nel mantenere
                                            attivo e funzionale il sistema di gestione qualità eseguendo: </p>
                                        <p><i class="fa fa-check text-primary me-3"></i>Aggiornamenti</p>
                                        <p><i class="fa fa-check text-primary me-3"></i>Monitoraggio</p>
                                        <p><i class="fa fa-check text-primary me-3"></i>Audit</p>
                                        <a href="#audit" class="btn btn-primary py-3 px-5 mt-3">Scopri di più</a>
                                    </div>
                                </div>
                            </div>
                            <div class="tab-pane fade" id="tab-pane-4">
                                <div class="row g-4">
                                    <div class="col-md-6" style="min-height: 350px;">
                                        <div class="position-relative h-100">
                                            <img class="position-absolute rounded w-100 h-100" src="img/service-4.jpg"
                                                style="object-fit: cover;" alt="">
                                        </div>
                                    </div>
                                    <div class="col-md-6" style="height: 400px;">
                                        <h3 class="mb-4">Licensing</h3>
                                        <div class="mb-4"> Le nostre competenze in termini di Licenze ci permette:
                                            <p><i class="fa fa-check text-primary me-3"></i>Redazione di licenze in
                                                ambito
                                                proprietario e open source</p>
                                            <p><i class="fa fa-check text-primary me-3"></i>Valutazione testi di licenza
                                                in
                                                Italiano</p>
                                            <p><i class="fa fa-check text-primary me-3"></i>Valutazione testi di licenza
                                                in
                                                Inglese</p>
                                            <a href="#licensing" class="btn btn-primary py-3 px-5 mt-3">Scopri di più</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="container-fluid facts my-5 py-5">
            <div class="container py-5">
                <div class="row g-5">
                    <div class="col-sm-6 col-lg-3 text-center wow fadeIn" data-wow-delay="0.1s">

                    </div>
                    <div class="col-sm-6 col-lg-3 text-center wow fadeIn" data-wow-delay="0.3s">

                    </div>
                    <div class="col-sm-6 col-lg-3 text-center wow fadeIn" data-wow-delay="0.5s">

                    </div>
                    <div class="col-sm-6 col-lg-3 text-center wow fadeIn" data-wow-delay="0.7s">
                    </div>
                </div>
            </div>
            <p id="dlgs-ra"></p>
        </div>
        <!-- Service End -->
        <div class="container">
            <div class="py-5">
                <h1 class="mb-4">D.Lgs 231/01 e Responsabilità Amministrativa</h1>
                <p>
                    Il Decreto Legislativo 231/2001 ha introdotto in Italia il Sistema di Responsabilità Amministrativa dell’Ente in base alla quale qualora un soggetto, dipendente o collaboratore, operante in una società (o ente), commetta uno dei reati presupposto, a vantaggio della società stessa, questa potrà essere condannata e subire una delle sanzioni previste dallo stesso D.lgs. 231/2001. Tale responsabilità si aggiunge a quella della persona fisica che ha realizzato materialmente il fatto.<br>
                    Tra i reati presupposto rientrano azioni in molteplici ambiti, sono considerati infatti, in elenco esemplificativo non esaustivo, reati societari, indebita percezione di erogazioni da parte dello Stato o altro Ente Pubblico o Comunità Europea, concussione, corruzione, frode informatica, trattamento illecito di dati, impiego di lavoratori stranieri irregolari, omicidio colposo e lesioni gravi o gravissime commessi in violazione delle norme antinfortunistiche e sulla tutela dell’igiene e della salute sul lavoro, reati ambientali, riciclaggio e autoriciclaggio, frodi IVA e reati tributari.<br>
                    Per essere esonerata dalla responsabilità amministrativa, la società deve dimostrare di aver adottato ed efficacemente attuato, prima della commissione del reato, un modello di organizzazione, gestione e controllo idonei a prevenire reati della specie di quello verificatosi. Le nostre competenze e attività in materia includono:
                <p><i class="fa fa-check text-primary me-3"></i>l’identificazione dei rischi potenziali e la mappa delle
                    attività a rischio;</p>
                <p><i class="fa fa-check text-primary me-3"></i>la creazione del modello organizzativo (parte generale
                    più parte speciale) e la definizione del codice etico;</p>
                <p><i class="fa fa-check text-primary me-3"></i>la predisposizione delle procedure interne specifiche
                    per i diversi processi aziendali;</p>
                <p><i class="fa fa-check text-primary me-3"></i>l’organizzazione del sistema di deleghe e
                    responsabilità;</p>
                <p><i class="fa fa-check text-primary me-3"></i>la definizione del sistema disciplinare;</p>
                <p><i class="fa fa-check text-primary me-3"></i>la formazione e informazione del personale;</p>
                <p><i class="fa fa-check text-primary me-3"></i>l’attività in qualità di Organismo di Vigilanza.</p>
                </p>
                <p id="privicy"></p>
            </div>
            <div class="py-5">
                <h1 class="mb-4">Privacy</h1>
                <p>
                    La normativa attualmente vigente in materia di trattamento dati è il Regolamento Europeo numero 679 del 2016, entrato in vigore in Italia nel maggio 2018, accompagnato da:
                <p><i class="fa fa-check text-primary me-3"></i>Decreto Legislativo n. 196 del 2003, al quale il GDPR si
                    è sovrapposto senza eliminarlo;</p>
                <p><i class="fa fa-check text-primary me-3"></i>Decreto legislativo n. 181 del 2018, che modifica il
                    decreto 196;</p>
                <p><i class="fa fa-check text-primary me-3"></i>Disciplina del Whistleblowing del 2017;</p>
                <p><i class="fa fa-check text-primary me-3"></i>Cookie Law (Direttiva europea del 2002, recepita nel
                    2014);</p>
                <p><i class="fa fa-check text-primary me-3"></i>Linee Guida del Garante per la protezione dei dati.</p>
                Trattare correttamente i dati è un adempimento necessario durante lo svolgimento di tutte le attività lavorative, con doveri da assolvere nei confronti di interessati, dipendenti, collaboratori, clienti. Deve essere tenuto presente durante l’operatività ordinaria come durante specifiche operazioni e campi operativi.<br> Le nostre competenze e attività in materia ci consentono di affrontare le problematiche ordinarie in ogni settore lavorativo, compresa l’area medico sanitaria, e in materia di Whistleblowing, Dossier sanitario, Videosorveglianza, Firma grafometrica, Siti Web, Newsletter, Biometria, Informatica e Sicurezza.
                </p>

                <p id="audit"></p>
            </div>
            <div class="py-5">

                <h1 class="mb-4">Audit ISO 9001</h1>
                <p>I sistemi di gestione qualità basati sullo standard ISO 9001 consentono alle aziende di analizzare il contesto (area geografica, mercato, concorrenza) in cui si opera, valutare le parti interessate (all’interno e all’esterno) e le loro esigenze, valutare i rischi da affrontare e le opportunità da sfruttare, controllare i costi e l’ottimale utilizzo delle risorse, migliorare la propria capacità di controllare i processi.<br>
                    Ciò porta molti vantaggi alle aziende che operano nel privato e diventa spesso necessaio quando le attività da svolgere sono connesse ad autorizzazioni e contratti con enti della pubblica amministrazione, allo scopo di poter garantire adeguati livelli di qualità nell’erogazione dei servizi e di fornirne prova tramite documentazione ed evidenze, rendendo possibile l’applicazione pratica delle innumerevoli normative che cadono dall’alto in capo all’ente. Per realizzare nella pratica i concetti di rintracciabilità e produzione di evidenze permettendo all’ente di dimostrare di aver adempiuto ad ogni richiesta che la normativa impone, l’esecuzione di audit periodici e la continuità nella gestione del sistema sono elementi fondamentali.<br>
                    Le nostre competenze e attività in materia ci consentono di affiancare l’azienda nel mantenere attivo e funzionale il sistema di gestione qualità eseguendo aggiornamenti, monitoraggio e audit.
                </p>
                <p id="licensing"></p>
            </div>
            <div class="py-5">
                <h1 class="mb-4">Licensing</h1>
                <p>Redazione di licenze in ambito proprietario e open source, valutazione testi di licenza in italiano
                    ed inglese.</p>
            </div>
        </div>
        </main>
    </container>
    `,
    components:{
        container: Container
    }
}

export default Home;
