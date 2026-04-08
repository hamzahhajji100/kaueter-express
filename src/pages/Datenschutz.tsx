import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import logoImg from "@/assets/logo.png";

const Datenschutz = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-primary py-6 px-6">
        <div className="max-w-3xl mx-auto flex items-center gap-4">
          <Link to="/" className="text-primary-foreground hover:text-accent transition-colors">
            <ArrowLeft className="w-6 h-6" />
          </Link>
          <img src={logoImg} alt="Kräuter Express" className="h-10 object-contain" />
        </div>
      </div>

      <article className="max-w-3xl mx-auto px-6 py-16">
        <h1 className="font-display text-4xl font-bold text-foreground mb-10">Datenschutzerklärung</h1>

        <div className="prose prose-lg max-w-none font-body text-muted-foreground space-y-6">
          <section>
            <h2 className="font-display text-xl font-bold text-foreground mt-8 mb-3">1. Datenschutz auf einen Blick</h2>
            <h3 className="font-display text-lg font-semibold text-foreground mt-4 mb-2">Allgemeine Hinweise</h3>
            <p>
              Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-bold text-foreground mt-8 mb-3">2. Verantwortliche Stelle</h2>
            <p>
              Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist:
            </p>
            <p>
              Kräuter Express GmbH<br />
              Ahmed Bouklata<br />
              Josef-Linden-Weg 6<br />
              51149 Köln
            </p>
            <p>
              Telefon: +49 177 745 7395<br />
              E-Mail: info@kraeuterexpress.com
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-bold text-foreground mt-8 mb-3">3. Datenerfassung auf dieser Website</h2>
            <h3 className="font-display text-lg font-semibold text-foreground mt-4 mb-2">Server-Log-Dateien</h3>
            <p>
              Der Provider der Seiten erhebt und speichert automatisch Informationen in so genannten Server-Log-Dateien, die Ihr Browser automatisch an uns übermittelt. Dies sind:
            </p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Browsertyp und Browserversion</li>
              <li>Verwendetes Betriebssystem</li>
              <li>Referrer URL</li>
              <li>Hostname des zugreifenden Rechners</li>
              <li>Uhrzeit der Serveranfrage</li>
              <li>IP-Adresse</li>
            </ul>
            <p>
              Eine Zusammenführung dieser Daten mit anderen Datenquellen wird nicht vorgenommen. Die Erfassung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-bold text-foreground mt-8 mb-3">4. Kontaktaufnahme</h2>
            <p>
              Wenn Sie uns per Telefon oder E-Mail kontaktieren, wird Ihre Anfrage inklusive aller daraus hervorgehenden personenbezogenen Daten (Name, Anfrage) zum Zwecke der Bearbeitung Ihres Anliegens bei uns gespeichert und verarbeitet. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.
            </p>
            <p>
              Die Verarbeitung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO, sofern Ihre Anfrage mit der Erfüllung eines Vertrags zusammenhängt oder zur Durchführung vorvertraglicher Maßnahmen erforderlich ist.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-bold text-foreground mt-8 mb-3">5. Google Maps</h2>
            <p>
              Diese Seite nutzt den Kartendienst Google Maps. Anbieter ist die Google Ireland Limited („Google"), Gordon House, Barrow Street, Dublin 4, Irland.
            </p>
            <p>
              Zur Nutzung der Funktionen von Google Maps ist es notwendig, Ihre IP-Adresse zu speichern. Diese Informationen werden in der Regel an einen Server von Google in den USA übertragen und dort gespeichert. Der Anbieter dieser Seite hat keinen Einfluss auf diese Datenübertragung.
            </p>
            <p>
              Die Nutzung von Google Maps erfolgt im Interesse einer ansprechenden Darstellung unserer Online-Angebote und an einer leichten Auffindbarkeit der von uns auf der Website angegebenen Orte. Dies stellt ein berechtigtes Interesse im Sinne von Art. 6 Abs. 1 lit. f DSGVO dar.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-bold text-foreground mt-8 mb-3">6. Ihre Rechte</h2>
            <p>Sie haben jederzeit das Recht:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Auskunft über Ihre bei uns gespeicherten personenbezogenen Daten zu erhalten (Art. 15 DSGVO)</li>
              <li>Die Berichtigung unrichtiger Daten zu verlangen (Art. 16 DSGVO)</li>
              <li>Die Löschung Ihrer Daten zu verlangen (Art. 17 DSGVO)</li>
              <li>Die Einschränkung der Verarbeitung zu verlangen (Art. 18 DSGVO)</li>
              <li>Der Verarbeitung zu widersprechen (Art. 21 DSGVO)</li>
              <li>Datenübertragbarkeit zu verlangen (Art. 20 DSGVO)</li>
            </ul>
            <p>
              Wenn Sie der Ansicht sind, dass die Verarbeitung Ihrer Daten gegen das Datenschutzrecht verstößt, haben Sie das Recht, sich bei einer Aufsichtsbehörde zu beschweren.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-bold text-foreground mt-8 mb-3">7. SSL-Verschlüsselung</h2>
            <p>
              Diese Seite nutzt aus Sicherheitsgründen eine SSL-Verschlüsselung. Eine verschlüsselte Verbindung erkennen Sie daran, dass die Adresszeile des Browsers von „http://" auf „https://" wechselt und an dem Schloss-Symbol in Ihrer Browserzeile.
            </p>
          </section>
        </div>
      </article>
    </div>
  );
};

export default Datenschutz;
