export default {
  nav: {
    about: "Über mich",
    projects: "Projekte",
    experience: "Erfahrung",
    education: "Ausbildung"
  },

  about: {
    title: "Über mich",
    text: "Technischer Physiker mit HTL-Ausbildung in Elektrotechnik und Erfahrung in numerischer Simulation, physikalischer Modellierung und Datenanalyse. Fundierte Kenntnisse in Python und C++ sowie praktische Erfahrung mit Finite-Elemente-Simulationen und der Planung elektrotechnischer Anlagen. Analytische Denkweise, strukturierte Arbeitsweise und hohe Motivation, komplexe technische Fragestellungen zu analysieren und innovative Lösungen zu entwickeln.",
  },

  education: {
    title: "Ausbildung",
    text: [
        {
        school: "Data Science Institute by Fabian Rappert",
        degree: "Data Science Bootcamp",
        dateRange: "2024",
        achievements: [
            "Zertifikat für Data Science",
        ],
        },
        {
        school: "Technische Universität Wien",
        degree: "Dipl.-Ing. in Technischer Physik",
        dateRange: "2017 - 2023",
        achievements: [
            "Abschluss mit Auszeichnung",
        ],
        },
        {
        school: "Technische Universität Wien",
        degree: "BSc in Technischer Physik",
        dateRange: "2010 - 2017",
        achievements: [

        ],
        },
        {
        school: "Loughborough University,  Vereinigtes Königreich",
        degree: "Erasmus-Austauschjahr",
        dateRange: "2012 - 2013",
        achievements: [

        ],
        },
        {
        school: "HTL Waidhofen/Ybbs",
        degree: "Reife- und Diplomprüfung, Fachrichtung Elektrotechnik",
        dateRange: "2001 - 2006",
        achievements: [

        ],
        },
    ],
  },

  experience: {
    title: "Erfahrung",
    text: [
        {
        company: "Plattform UniProf",
        title: "Kursleiter (Physik, Mathematik, Programmieren)",
        dateRange: "Mar 2023 - Present",
        bullets: [
            "Planung und Durchführung von Kursen für Studierende.",
        ],
        },
        {
        company: "Institut für Hochenergiephysik der Österreichischen Akademie der Wissenschaften",
        title: "Masterarbeit (Teilchenphysik)",
        dateRange: "Sep 2021 - Dez 2022",
        bullets: [
            "Datenauswertung eines Teilchenbeschleunigers auf Basis der Messdaten des Belle-Experiments.",
        ],
        },
        {
        company: "Technische Universität Wien",
        title: "Tutor (Physik für Elektrotechniker)",
        dateRange: "Okt 2014 - Feb 2015",
        bullets: [
            "Leitung von Übungsgruppen sowie anschauliche Vermittlung grundlegender physikalischer Konzepte.",
        ],
        },
        {
        company: "Hereschwerke GmbH",
        title: "Elektrotechnik-Konstrukteur",
        dateRange: "Sep 2006 - Aug 2010",
        bullets: [
            "Erstellen von Stromverteilerplänen für Kläranlagen, Pumpwerke und Wasseraufbereitungsanlagen.",
        ],
        },
    ],
  },

  hero: {
    hello: "",
    im: "",
    title: "Physiker | Python | C/C++ | Numerische Simulation",
  },

  projects: {
    title: "Projekte",
    text: [
        {
        name: "Masterarbeit: Auswertung von Messdaten eines Beschleunigers",
        description:
            "In meiner Masterarbeit habe ich mich mit der Auswertung von Messdaten eines Teilchenbeschleunigers beschäftigt. Ziel war es, die Unterschiede zwischen verschiedenen Methoden zur Bestimmung eines grundlegenden Parameters der Teilchenphysik zu untersuchen, der die Wechselwirkung zwischen bestimmten Quark-Arten beschreibt.",
        link: "https://repositum.tuwien.at/handle/20.500.12708/142467",
        skills: ["Python", "NumPy", "SciPy", "Matplotlib"],
        },
        {
        name: "Projektarbeit: Physikalische Analyse der Daten des Belle-Experimentes",
        description:
            "In diesem Projekt habe ich Datensätze des internationalen Belle-Experiments analysiert, das von 1999 bis 2010 in Japan durchgeführt wurde. Ziel war es, Erkenntnisse über einen speziellen Teilchenzerfall zu gewinnen.",
        skills: ["C++", "CERN ROOT"],
        },
        {
        name: "Projektarbeit: Simulation von Teilchenüberlappung",
        description:
            "In diesem Projekt habe ich Kriterien für die Überlappung von superelliptischen Teilchen entwickelt, die für Monte-Carlo-Simulationen wichtig sind. Die Aufgabe bestand darin, ein mathematisches Kriterium zu entwickeln, das bestimmt, ob sich diese Teilchen überlappen, berühren oder getrennt sind.",
        skills: ["Mathematica", "Fortran"],
        },
        {
        name: "Bachelorarbeit: Simulation von Lichtsteuerung durch zwei dielektrische Partikel in der Nähe eines Wellenleiters",
        description:
            "In meiner Bachelorarbeit habe ich untersucht, wie die Ausbreitung von Licht in einem optischen Wellenleiter durch die Platzierung von Nanopartikeln beeinflusst werden kann. Ziel war es, herauszufinden, ob sich so optische Dioden realisieren lassen.",
        skills: ["Netgen/NGSolve (FEM)", "Python", "Pandas"],
        },
    ],
  },

  footer: {
    about: "Über mich",
    projects: "Projekte",
    experience: "Erfahrung",
    education: "Ausbildung",
    rights: "Alle Rechte vorbehalten."
  },
};