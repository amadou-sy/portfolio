import { motion } from "framer-motion";

const projects = [
  {
    title: "Monitoring avec Prometheus & Grafana",
    description:
      "Déploiement d’un stack de monitoring : installation de Prometheus, configuration des exporters (node_exporter), création de dashboards Grafana et alertes basées sur les métriques système.",
    skills: ["Prometheus", "Grafana", "Linux", "Dashboards", "Alerting"],
  },
  {
    title: "Déploiement de Wazuh SIEM",
    description:
      "Mise en place d’un SIEM avec Wazuh (manager + agents), intégration avec l’OSSEC, création de règles de détection et tableaux de bord pour la supervision sécurité.",
    skills: ["Wazuh", "SIEM", "IDS", "Linux", "Kibana"],
  },
  {
    title: "Analyse de vulnérabilités avec Nessus",
    description:
      "Installation de Nessus Essentials, scans de vulnérabilités sur un sous-réseau de VMs, interprétation des résultats et remédiations prioritaires.",
    skills: ["Nessus", "VA", "Réseau", "Remédiation"],
  },
  {
    title: "Authentification Réseau (pfSense + RADIUS + AD)",
    description:
      "Intégration de pfSense avec un serveur RADIUS et Active Directory pour l’authentification 802.1X et la gestion d’accès réseau.",
    skills: ["pfSense", "RADIUS", "Active Directory", "Sécurité réseau"],
  },
  {
    title: "Virtualisation & Lab (Proxmox sur VirtualBox)",
    description:
      "Installation de Proxmox dans un environnement VirtualBox pour héberger des VMs de tests et scénarios sécurité/monitoring.",
    skills: ["Proxmox", "VirtualBox", "Linux", "Lab"],
  },
];

const skills = [
  "Linux",
  "Windows Server",
  "pfSense",
  "Proxmox",
  "Prometheus",
  "Grafana",
  "Nessus",
  "Wazuh",
  "Nagios",
  "GLPI",
  "Python",
  "Java",
  "C#",
  "Oracle Server",
  "Cisco (CCNA)",
];

function Badge({ children }) {
  return (
    <span className="px-3 py-1 text-sm bg-blue-100 text-blue-700 rounded-full">
      {children}
    </span>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-800">
      {/* NAV */}
      <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur bg-white/70 border-b">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <a href="#" className="font-bold">Amadou Sy</a>
          <div className="hidden md:flex gap-6 text-sm">
            <a href="#about" className="hover:underline">À propos</a>
            <a href="#projects" className="hover:underline">Projets</a>
            <a href="#skills" className="hover:underline">Compétences</a>
            <a href="#contact" className="hover:underline">Contact</a>
          </div>
        </div>
      </nav>

      {/* HEADER */}
      <header className="h-screen flex flex-col justify-center items-center text-center px-6">
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl font-extrabold"
        >
          Amadou Sy
        </motion.h1>
        <p className="mt-4 text-lg text-gray-600">
          Master SSIM | Sécurité des SI & Monétique
        </p>
        <div className="mt-6 flex gap-3">
          <a
            href="#projects"
            className="px-6 py-3 bg-blue-600 text-white rounded-2xl shadow-lg"
          >
            Voir mes projets
          </a>
          <a
            href="#contact"
            className="px-6 py-3 border border-blue-600 text-blue-700 rounded-2xl"
          >
            Me contacter
          </a>
        </div>
      </header>

      {/* ABOUT */}
      <section id="about" className="py-20 px-6 max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-6 text-center">À propos</h2>
        <p className="text-lg text-gray-700 leading-relaxed text-center">
          Étudiant en Master Sécurité des Systèmes d’Information et Monétique (SSIM) au Groupe ISI,
          passionné par la cybersécurité et l’administration réseau. J’ai réalisé plusieurs projets
          concrets autour du monitoring, de l’analyse de vulnérabilités et de la virtualisation.
        </p>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="py-20 px-6 bg-white">
        <h2 className="text-3xl font-bold mb-10 text-center">Mes Projets</h2>
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-50 shadow-lg rounded-2xl p-6 border"
            >
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-gray-600 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.skills.map((s, i) => (
                  <Badge key={i}>{s}</Badge>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* SKILLS */}
      <section id="skills" className="py-20 px-6 max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-6 text-center">Compétences</h2>
        <div className="flex flex-wrap justify-center gap-3">
          {skills.map((skill, i) => (
            <span
              key={i}
              className="px-4 py-2 bg-gray-200 text-gray-700 rounded-full shadow"
            >
              {skill}
            </span>
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <section
        id="contact"
        className="py-20 px-6 bg-blue-600 text-white text-center"
      >
        <h2 className="text-3xl font-bold mb-6">Contact</h2>
        <p className="mb-2">📍 Dakar, Sénégal</p>
        <p className="mb-2">📧 <a className="underline" href="mailto:amadou.sy@example.com">amadou.sy@example.com</a></p>
        <p className="mb-2">💼 <a className="underline" href="https://linkedin.com" target="_blank" rel="noreferrer">LinkedIn</a></p>
        <p>📂 <a className="underline" href="https://github.com" target="_blank" rel="noreferrer">GitHub</a></p>
      </section>

      <footer className="py-8 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Amadou Sy — Tous droits réservés.
      </footer>
    </div>
  );
}
