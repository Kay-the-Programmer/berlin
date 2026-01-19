
export const translations = {
    de: {
        nav: {
            home: "Start",
            services: "Leistungen",
            references: "Referenzen",
            about: "Über uns",
            contact: "Kontakt",
            freeQuote: "Angebot anfordern",
            callUs: "Anrufen"
        },
        hero: {
            badge: "24h Einsatzbereitschaft in ganz Berlin",
            title1: "Entrümpelung",
            title2: "Berlin",
            subtitle: "schnell • diskret • fair",
            description: "Professionelle Haushaltsauflösung und Wohnungsräumung. Kostenlose Besichtigung innerhalb von 24h.",
            benefits: ["Schnell vor Ort", "Festpreis-Garantie", "Diskrete Abwicklung", "Besichtigung kostenlos"],
            ctaPrimary: "Kostenloses Angebot",
            ctaSecondary: "Anrufen: +49 176 79567083",
            learnMore: "Mehr erfahren",
            stats: { projects: "Projekte", service: "Service", rating: "Bewertung" }
        },
        whyChooseUs: {
            title: "Warum",
            subtitle: "Berlin ClearOut",
            description: "Über 500 zufriedene Kunden vertrauen auf unsere professionelle Entrümpelung in Berlin",
            items: [
                { title: "Schnell vor Ort", desc: "Besichtigungstermine in ganz Berlin innerhalb von 24 Stunden." },
                { title: "Festpreis-Garantie", desc: "Transparente Angebote ohne versteckte Kosten nach Besichtigung." },
                { title: "Diskret & Zuverlässig", desc: "Saubere, sichere und respektvolle Abwicklung aller Aufträge." },
                { title: "Voll versichert", desc: "Betriebshaftpflichtversicherung – Sie sind auf der sicheren Seite." }
            ]
        },
        services: {
            title: "Reinigungsdienstleistungen",
            description: "Von der Grundreinigung bis zu Spezialdiensten – wir sind Ihr Partner in Berlin",
            list: [
                { title: "Grundreinigung", desc: "26€/h pro Reinigungskraft.", features: ["Aufräumen", "Staubsaugen", "Staubwischen"] },
                { title: "Tiefenreinigung", desc: "30€/h pro Reinigungskraft.", features: ["Intensivreinigung", "Hinter Möbeln", "Desinfektion"] },
                { title: "Einzug / Auszug", desc: "30€/h pro Reinigungskraft.", features: ["Leere Wohnung", "Detailreinigung", "Übergabefertig"] },
                { title: "Regelmäßige Reinigung", desc: "25€/h pro Reinigungskraft.", features: ["Wöchentlich/14-tägig", "Konstante Qualität", "Gleiche Kraft"] },
                { title: "Last-Minute Reinigung", desc: "42€/Std pro Reinigungskraft.", features: ["Schnelle Reaktion", "Prioritätsservice", "24/7 Verfügbarkeit"] },
                { title: "Depressionsreinigung", desc: "45€/h pro Reinigungskraft.", features: ["Einfühlsam", "Urteilsfrei", "Organisationshilfe"] },
                { title: "Nach-Party Reinigung", desc: "35€/h pro Reinigungskraft.", features: ["Müllentsorgung", "Oberflächen", "Bodenwäsche"] },
                { title: "Reinigung am selben Tag", desc: "45€/h pro Reinigungskraft.", features: ["Sofortservice", "Dringende Anfrage", "Schnelle Abwicklung"] }
            ]
        },
        beforeAfter: {
            title: "Vorher & Nachher",
            subtitle: "Unsere Arbeit spricht für sich",
            description: "Ziehen Sie den Slider und sehen Sie selbst, wie wir aus vollgestellten Räumen wieder wohnliche Bereiche schaffen",
            completed: "Abgeschlossen in",
            day: "Tag",
            satisfied: "100% zufrieden",
            labels: { before: "Vorher", after: "Nachher" },
            projects: [
                {
                    before: "/src/images/before.png",
                    after: "/src/images/after.png",
                    label: "Kellerentrümpelung",
                    location: "Berlin-Mitte",
                    days: 1
                },
                {
                    before: "/src/images/before.png",
                    after: "/src/images/after.png",
                    label: "Komplette Haushaltsauflösung",
                    location: "Berlin-Charlottenburg",
                    days: 1
                },
                {
                    before: "/src/images/before.png",
                    after: "/src/images/after.png",
                    label: "Komplettentrümpelung",
                    location: "Berlin-Pankow",
                    days: 1
                }
            ]
        },
        testimonials: {
            title: "Das sagen unsere",
            subtitle: "Kunden",
            description: "Über 500 zufriedene Kunden vertrauen auf Berlin ClearOut",
            ratingText: "5 von 5 Sternen",
            googleText: "Google Bewertungen",
            viewAll: "Alle Bewertungen ansehen",
            reviews: [
                { name: "M. Schneider", location: "Berlin-Kreuzberg", type: "Wohnungsentrümpelung", text: "Sehr schnelle und saubere Entrümpelung meiner Wohnung. Preis genau wie vereinbart. Team super freundlich." },
                { name: "A. Yilmaz", location: "Berlin-Neukölln", type: "Messie-Wohnung", text: "Diskret und zuverlässig bei der Messie-Wohnung meiner Mutter. Sehr einfühlsam und respektvoll. Vielen Dank!" },
                { name: "K. Bauer", location: "Berlin-Pankow", type: "Kellerentrümpelung", text: "Innerhalb von 24h Besichtigung und noch in derselben Woche erledigt. Toller Service, faire Preise." }
            ]
        },
        faq: {
            title: "Häufige",
            subtitle: "Fragen",
            description: "Antworten auf die wichtigsten Fragen zur Entrümpelung in Berlin",
            items: [
                { question: "Was kostet eine Entrümpelung in Berlin?", answer: "Die Kosten hängen von verschiedenen Faktoren wie der Größe der Wohnung, der Menge des Unrats und dem Stockwerk ab. Wir bieten kostenlose Besichtigungen an, um einen Festpreis zu nennen." },
                { question: "Wie schnell können Sie zur Besichtigung kommen?", answer: "In der Regel können wir innerhalb von 24 Stunden einen Termin zur Besichtigung in ganz Berlin anbieten – oft sogar noch am selben Tag." },
                { question: "Entrümpeln Sie auch Messie-Wohnungen?", answer: "Ja, wir sind spezialisiert auf die diskrete und einfühlsame Entrümpelung von Messie-Haushalten." },
                { question: "Welche Gegenstände werden entsorgt?", answer: "Wir entsorgen fast alles: Möbel, Elektrogeräte, Hausmüll, Sperrmüll und Problemstoffe." },
                { question: "Sind Sie versichert?", answer: "Ja, wir verfügen über eine umfassende Betriebshaftpflichtversicherung." }
            ]
        },
        about: {
            title1: "Entrümpelung Berlin",
            title2: "– Ihr lokaler Experte für Berlin & Umland",
            p1_1: "Berlin ClearOut",
            p1_2: " ist Ihr zuverlässiger Partner für ",
            p1_3: " Entrümpelung Berlin",
            p1_4: ", ",
            p1_5: " Wohnungsauflösung Berlin",
            p1_6: " und ",
            p1_7: " Wohnungsräumung Berlin",
            p1_8: ". Seit vielen Jahren sind wir in der Hauptstadt tätig und haben bereits über 500 Projekte erfolgreich abgeschlossen.",
            p2_1: "Unser erfahrenes Team übernimmt die komplette ",
            p2_2: "Kellerentrümpelung Berlin",
            p2_3: " sowie die einfühlsame Räumung von ",
            p2_4: "Messie-Wohnungen in Berlin",
            p2_5: ". Dabei arbeiten wir stets diskret, zuverlässig und mit festen Preisen ohne versteckte Kosten.",
            p3_1: "Von ",
            p3_2: "Charlottenburg",
            p3_3: " über ",
            p3_4: "Neukölln",
            p3_5: ", ",
            p3_6: "Berlin-Mitte",
            p3_7: ", ",
            p3_8: "Prenzlauer Berg",
            p3_9: " bis ",
            p3_10: "Pankow",
            p3_11: " – wir sind in allen Berliner Bezirken und dem Brandenburger Umland für Sie da. Besichtigung kostenlos, Angebot zum Festpreis.",
            listTitle: "Unsere Kernleistungen:",
            services: [
                "Entrümpelung Berlin & Umland",
                "Professionelle Wohnungsauflösung",
                "Fachgerechte Wohnungsräumung",
                "Messie Wohnung diskret entrümpeln",
                "Kellerentrümpelung zum Festpreis"
            ],
            hotlineLabel: "24h Express Hotline",
            features: [
                "Schnell vor Ort (24h)",
                "Echte Festpreis-Garantie",
                "100% Diskrete Abwicklung",
                "Kostenlose Vor-Ort-Besichtigung"
            ]
        },
        contact: {
            title: "Angebot einholen",
            subtitle: "Füllen Sie das Formular aus – wir melden uns innerhalb von 2 Stunden zurück",
            direct: "Direkter Kontakt",
            direct_call: "Anrufen",
            direct_whatsapp: "WhatsApp",
            direct_office: "Büro",
            direct_whatsapp_text: "24/7 Erreichbar",
            direct_office_text: "Berlin, Deutschland",
            form: {
                postalCode: "Postleitzahl",
                date: "Wunschtermin",
                time: "Uhrzeit",
                cleaningType: "Art der Reinigung",
                cleaners: "Anzahl der Reinigungskräfte",
                hours: "Stunden pro Reinigungskraft",
                totalHours: "Ihre Gesamtreinigungsstunden betragen",
                phone: "Telefonnummer",
                email: "E-Mail",
                submit: "Unverbindliche Anfrage absenden",
                sending: "Wird gesendet...",
                success: "Danke, dass Sie einen Reinigungskraft angefordert haben. Wir werden uns innerhalb von 2 Stunden bei Ihnen melden.",
                response: "Antwort innerhalb 2 Stunden",
                another: "Weitere Anfrage senden"
            }
        },
        en: {
            nav: {
                home: "Home",
                services: "Service",
                references: "Refer",
                about: "About us",
                contact: "Contact",
                freeQuote: "Get a Quote",
                callUs: "Call Us"
            },
            hero: {
                badge: "24hours Cleaning Services available in Berlin & Brandenburg",
                title1: "Professional",
                title2: "Home & Office cleaning in Berlin",
                subtitle: "Reliable • Fast • Direct",
                description: "Book your cleaner directly from a Cleaning Company in Berlin. Reliable.",
                benefits: ["Fast on-site", "Fixed Price Guarantee", "Discreet handling", "Free viewing"],
                ctaPrimary: "Request a cleaner",
                ctaSecondary: "Call: +49 176 79567083",
                learnMore: "Learn more",
                stats: { projects: "Projects", service: "Service", rating: "Rating" }
            },
            whyChooseUs: {
                title: "Why",
                subtitle: "Berlin ClearOut",
                description: "Over 500 satisfied customers trust our professional decluttering in Berlin",
                items: [
                    { title: "Fast on-site", desc: "Viewing appointments throughout Berlin within 24 hours." },
                    { title: "Fixed Price Guarantee", desc: "Transparent offers without hidden costs after viewing." },
                    { title: "Discreet & Reliable", desc: "Clean, safe and respectful handling of all orders." },
                    { title: "Fully insured", desc: "Business liability insurance – you are on the safe side." }
                ]
            },
            services: {
                title: "Cleaning Services",
                description: "From basic cleaning to specialized services – we are your partner in Berlin",
                list: [
                    { title: "Basic Cleaning", desc: "26€/h Per cleaner.", features: ["General Tidy Up", "Dusting", "Vacuuming"] },
                    { title: "Deep Cleaning", desc: "30€/h Per cleaner.", features: ["Intensive Cleaning", "Behind Furniture", "Sanitizing"] },
                    { title: "Move in / Move out", desc: "30€/h Price Per Cleaner.", features: ["Empty Home", "Detailed Clean", "Handover Ready"] },
                    { title: "Regular Cleaning", desc: "25€/h Price Per Cleaner.", features: ["Weekly/Bi-weekly", "Consistent Quality", "Same Cleaner"] },
                    { title: "Last-Minute Cleaning", desc: "42€/hr Price Per Cleaner.", features: ["Fast Response", "Priority Service", "24/7 Availability"] },
                    { title: "Depression Cleaning", desc: "45€/h Price Per Cleaner.", features: ["Compassionate", "Non-judgmental", "Organizing Help"] },
                    { title: "After Party Cleaning", desc: "35€/h Price Per Cleaner.", features: ["Trash Removal", "Surface Cleaning", "Floor Washing"] },
                    { title: "Same-day-Cleaning", desc: "45€/h Price Per Cleaner.", features: ["Immediate Service", "Urgent Request", "Fast Turnaround"] }
                ]
            },
            beforeAfter: {
                title: "Before & After",
                subtitle: "Our work speaks for itself",
                description: "Drag the slider and see for yourself how we turn cluttered rooms into livable spaces again",
                completed: "Completed in",
                day: "day",
                satisfied: "100% satisfied",
                labels: { before: "Before", after: "After" },
                projects: [
                    {
                        before: "/src/images/before.png",
                        after: "/src/images/after.png",
                        label: "Basement Clearing",
                        location: "Berlin-Mitte",
                        days: 1
                    },
                    {
                        before: "/src/images/before.png",
                        after: "/src/images/after.png",
                        label: "Complete Household Liquidation",
                        location: "Berlin-Charlottenburg",
                        days: 1
                    },
                    {
                        before: "/src/images/before.png",
                        after: "/src/images/after.png",
                        label: "Full Decluttering",
                        location: "Berlin-Pankow",
                        days: 1
                    }
                ]
            },
            testimonials: {
                title: "What our",
                subtitle: "Customers say",
                description: "Over 500 satisfied customers trust Berlin ClearOut",
                ratingText: "5 out of 5 stars",
                googleText: "Google Reviews",
                viewAll: "View all reviews",
                reviews: [
                    { name: "M. Schneider", location: "Berlin-Kreuzberg", type: "Apartment Clearing", text: "Very fast and clean clearing of my apartment. Price exactly as agreed. Team super friendly." },
                    { name: "A. Yilmaz", location: "Berlin-Neukölln", type: "Messie Apartment", text: "Discreet and reliable with my mother's Messie apartment. Very empathetic and respectful. Thank you!" },
                    { name: "K. Bauer", location: "Berlin-Pankow", type: "Basement Clearing", text: "Viewing within 24h and done in the same week. Great service, fair prices." }
                ]
            },
            faq: {
                title: "Common",
                subtitle: "Questions",
                description: "Answers to the most important questions about clearing out in Berlin",
                items: [
                    { question: "What does clearing out in Berlin cost?", answer: "Costs depend on factors like apartment size, amount of junk, and floor level. We offer free viewings to provide a fixed price." },
                    { question: "How fast can you come for a viewing?", answer: "Usually we can offer a viewing appointment throughout Berlin within 24 hours – often on the same day." },
                    { question: "Do you also clear Messie apartments?", answer: "Yes, we specialize in the discreet and empathetic clearing of Messie households." },
                    { question: "What items are disposed of?", answer: "We dispose of almost everything: furniture, electronics, household waste, bulky waste, and hazardous materials." },
                    { question: "Are you insured?", answer: "Yes, we have comprehensive business liability insurance." }
                ]
            },
            about: {
                title1: "Decluttering Berlin",
                title2: "– Your local expert for Berlin & surroundings",
                p1_1: "Berlin ClearOut",
                p1_2: " is your reliable partner for ",
                p1_3: " decluttering Berlin",
                p1_4: ", ",
                p1_5: " household liquidation Berlin",
                p1_6: " and ",
                p1_7: " apartment clearance Berlin",
                p1_8: ". We have been active in the capital for many years and have successfully completed over 500 projects.",
                p2_1: "Our experienced team handles complete ",
                p2_2: "basement clearing Berlin",
                p2_3: " as well as the empathetic clearing of ",
                p2_4: "Messie apartments in Berlin",
                p2_5: ". We always work discreetly, reliably and with fixed prices without hidden costs.",
                p3_1: "From ",
                p3_2: "Charlottenburg",
                p3_3: " via ",
                p3_4: "Neukölln",
                p3_5: ", ",
                p3_6: "Berlin-Mitte",
                p3_7: ", ",
                p3_8: "Prenzlauer Berg",
                p3_9: " to ",
                p3_10: "Pankow",
                p3_11: " – we are there for you in all Berlin districts and the Brandenburg surroundings. Viewing free of charge, offer at a fixed price.",
                listTitle: "Our Core Services:",
                services: [
                    "Decluttering Berlin & Surroundings",
                    "Professional Household Liquidation",
                    "Professional Apartment Clearance",
                    "Discreetly Clearing Messie Apartments",
                    "Basement Clearing at a Fixed Price"
                ],
                hotlineLabel: "24h Express Hotline",
                features: [
                    "Fast on-site (24h)",
                    "Real Fixed Price Guarantee",
                    "100% Discreet Handling",
                    "Free On-Site Viewing"
                ]
            },
            contact: {
                title: "Get an Offer",
                subtitle: "Fill out the form – we will get back to you within 2 hours",
                direct: "Direct Contact",
                direct_call: "Call",
                direct_whatsapp: "WhatsApp",
                direct_office: "Office",
                direct_whatsapp_text: "24/7 Available",
                direct_office_text: "Berlin, Germany",
                form: {
                    postalCode: "Postal Code",
                    date: "Desired Date",
                    time: "Time",
                    cleaningType: "Type of Cleaning",
                    cleaners: "Number of Cleaners",
                    hours: "Hours per Cleaner",
                    totalHours: "Your Total Cleaning Hours is",
                    phone: "Phone Number",
                    email: "Email",
                    submit: "Submit your non-binding Request",
                    sending: "Sending...",
                    success: "Thank you for Requesting a cleaner we would get back to you with 2 hours.",
                    response: "Response within 2 hours",
                    another: "Send another request"
                }
            }
        }
    };
