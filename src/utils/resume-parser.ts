/**
 * Parser to extract career information from Noah's resume
 */

export interface TimelineEvent {
  start_date: {
    year: string;
    month: string;
    day?: string;
  };
  end_date?: {
    year: string;
    month: string;
    day?: string;
  };
  text: {
    headline: string;
    text: string;
  };
  group?: string;
  background?: {
    url?: string;
    color?: string;
  };
  media?: {
    url: string;
    caption?: string;
    credit?: string;
  };
}

export interface TimelineData {
  title: {
    text: {
      headline: string;
      text: string;
    };
    background?: {
      color?: string;
    };
  };
  events: TimelineEvent[];
}

/**
 * Convert Noah's resume data to TimelineJS format
 */
export function getTimelineData(locale: string = 'en'): TimelineData {
  const title = {
    text: {
      headline: locale === 'en' ? "Noah Cantor's Professional Journey" : "Trayectoria Profesional de Noah Cantor",
      text: locale === 'en' 
        ? "A timeline of my career path and key professional experiences."
        : "Una línea de tiempo de mi carrera y experiencias profesionales clave."
    },
    background: {
      color: "#FF7A00"
    }
  };
  
  // Career events from Noah's resume
  const events: TimelineEvent[] = [
    {
      start_date: {
        year: "2023",
        month: "8"
      },
      end_date: {
        year: "2025",
        month: "2"
      },
      text: {
        headline: locale === 'en' ? "Staffing Consultant" : "Consultor de Personal",
        text: locale === 'en' 
          ? "<p><strong>AppleOne Employment Services, Salt Lake City, UT</strong></p><ul><li>Engineered Python tools to automate candidate sourcing, reducing manual effort.</li><li>Developed data-driven outreach strategies using web scraping & API integrations.</li><li>Implemented NLP pipelines to standardize candidate resumes for ATS compatibility.</li><li>Built automated tools to track hiring trends & salary benchmarks.</li><li>Consistently exceeded recruitment targets, driving revenue growth.</li></ul>"
          : "<p><strong>AppleOne Employment Services, Salt Lake City, UT</strong></p><ul><li>Desarrollé herramientas en Python para automatizar la búsqueda de candidatos, reduciendo el esfuerzo manual.</li><li>Desarrollé estrategias de divulgación basadas en datos utilizando web scraping e integraciones de API.</li><li>Implementé pipelines de NLP para estandarizar currículums de candidatos para compatibilidad con ATS.</li><li>Construí herramientas automatizadas para seguir tendencias de contratación y benchmarks salariales.</li><li>Superé constantemente los objetivos de reclutamiento, impulsando el crecimiento de ingresos.</li></ul>"
      },
      group: locale === 'en' ? "Employment" : "Empleo",
      background: {
        color: "#f8f9fa"
      }
    },
    {
      start_date: {
        year: "2022",
        month: "3"
      },
      end_date: {
        year: "2023",
        month: "6"
      },
      text: {
        headline: locale === 'en' ? "Data & Technical Support Coordinator" : "Coordinador de Datos y Soporte Técnico",
        text: locale === 'en'
          ? "<p><strong>Western States Calibration, Salt Lake City, UT</strong></p><ul><li>Created & maintained protocols for precision tool calibration.</li><li>Oversaw high-volume data entry & record-keeping with rigorous quality control.</li><li>Collaborated with teams to streamline documentation & reduce turnaround times.</li><li>Developed actionable documentation to enhance technician training.</li><li>Ensured compliance with quality standards & regulatory requirements.</li></ul>"
          : "<p><strong>Western States Calibration, Salt Lake City, UT</strong></p><ul><li>Creé y mantuve protocolos para la calibración de herramientas de precisión.</li><li>Supervisé la entrada de datos de alto volumen y el mantenimiento de registros con un riguroso control de calidad.</li><li>Colaboré con equipos para agilizar la documentación y reducir los tiempos de respuesta.</li><li>Desarrollé documentación procesable para mejorar la capacitación de técnicos.</li><li>Aseguré el cumplimiento de los estándares de calidad y los requisitos regulatorios.</li></ul>"
      },
      group: locale === 'en' ? "Employment" : "Empleo",
      background: {
        color: "#f8f9fa"
      }
    },
    {
      start_date: {
        year: "2021",
        month: "3"
      },
      end_date: {
        year: "2022",
        month: "2"
      },
      text: {
        headline: locale === 'en' ? "Independent Automation Developer" : "Desarrollador de Automatización Independiente",
        text: locale === 'en'
          ? "<p><strong>Freelance, Remote</strong></p><ul><li>Developed custom AHK (AutoHotkey) scripts for the video game OSRS (Old School RuneScape) to automate gameplay tasks.</li><li>Promoted & sold scripts via forums, Discord, & in-game channels.</li><li>Gained hands-on software development, customer support, & marketing experience through creative problem solving.</li></ul>"
          : "<p><strong>Freelance, Remoto</strong></p><ul><li>Desarrollé scripts personalizados de AHK (AutoHotkey) para el videojuego OSRS (Old School RuneScape) para automatizar tareas de juego.</li><li>Promocioné y vendí scripts a través de foros, Discord y canales dentro del juego.</li><li>Adquirí experiencia práctica en desarrollo de software, atención al cliente y marketing mediante la resolución creativa de problemas.</li></ul>"
      },
      group: locale === 'en' ? "Freelance" : "Trabajo Independiente",
      background: {
        color: "#f8f9fa"
      }
    },
    {
      start_date: {
        year: "2019",
        month: "9"
      },
      end_date: {
        year: "2021",
        month: "5"
      },
      text: {
        headline: locale === 'en' ? "Writing Seminars (Non-Degree Program)" : "Seminarios de Escritura (Programa Sin Título)",
        text: locale === 'en'
          ? "<p><strong>Johns Hopkins University, Baltimore, MD</strong></p><p>Participated in writing seminars to develop communication and creative skills.</p>"
          : "<p><strong>Johns Hopkins University, Baltimore, MD</strong></p><p>Participé en seminarios de escritura para desarrollar habilidades de comunicación y creativas.</p>"
      },
      group: locale === 'en' ? "Education" : "Educación",
      background: {
        color: "#e9ecef"
      }
    }
  ];
  
  return { title, events };
}
