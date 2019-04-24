// Google Scholar, top 3 pages
// Last decade
// "community hurricane resilience metrics"
// "community hurricane resilience assessment"
// "community hurricane resilience"
// "building hurricane resilience metrics"
// "building hurricane resilience assessment"
// "building hurricane resilience"
// "hurricane resilience metrics"
// "hurricane resilience assessment"
// "hurricane resilience"

var lit = {
    metadata: {
        details: {
            journal: null,
            year: null,
            title: null,
            authors: [],
            depts: [],
            keywords: []
        },
        topic: {
            hazard: null,
            system: null,
            scale: null,
            case: [],
            motivation: [],
            objective: []
        },
        methods: [],
        results: []
    },
    data: [{
        details: {
            journal: 'Science',
            year: 2014,
            title: 'Evaluating Flood Resilience Strategies for Coastal Megacities',
            authors: [
                'Aerts',
                'Botzen',
                'Emanuel',
                'Lin',
                'Moel',
                'Michel-Kerjan'
            ],
            depts: [
                'Environmental Studies',
                'Earth, Atmospheric and Planetary Sciences',
                'Civil and Environmental Engineering',
                'Risk Management',
                'Operations Management',
                'Information Management'
            ],
            keywords: []
        },
        topic: {
            hazard: 'Storm Surge',
            system: null,
            scale: 'Census Block',
            case: [
                'New York City'
            ],
            motivation: [
                'climate change',
                'sea level rise',
                'zoning regulations',
                'building codes'
            ],
            objective: [
                'promote investments',
                'aid deicison making'
            ]
        },
        methods: [
            'flood-risk model',
            'flood depth-damage curves',
            'benefit-cost ratios'
        ],
        results: [
            'policy recommendations'
        ]
    },{
        details: {
            journal: 'Natural Hazards',
            year: 2013,
            title: 'Risk-Based Input-Output Analysis of Hurricane Impacts on Interdependent Regional Workforce Systems',
            authors: [
                'Akhtar',
                'Santos'
            ],
            depts: [
                'Engineering Management',
                'Industrial and Systems Engineering'
            ],
            keywords: [
                'workforce interdependencies',
                'inoperability input-output modeling',
                'hurricanes',
                'resilience',
                'Virginia'
            ]
        },
        topic: {
            hazard: 'Hurricanes',
            system: 'Workforce',
            scale: 'State',
            case: [
                'Virginia'
            ],
            motivation: [
                'economic disruptions'
            ],
            objective: [
                'determine critical workforce sectors'
            ]
        },
        methods: [
            'dynamic inoperability input-output model',
            'economic loss metrics',
            'inoperability metrics'
        ],
        results: [
            'total economic loss due to workforce absenteeism around $410 million',
            'by economic loss: (1) professional, scientific and technical services, (2) federal general government, (3) state and local government enterprises, (4) construction and (5) administrative and support services',
            'by inoperability: (1) social assistance, (2) hospitals and nursing and residential care facilities, (3) educational services, (4) federal government enterprises and (5) federal general government'
        ]
    },{
        details: {
            journal: 'American Behavioral Scientist',
            year: 2015,
            title: 'Social Capital and Community Resilience',
            authors: [
                'Aldrich',
                'Meyer'
            ],
            depts: [],
            keywords: [
                'community resilience',
                'social capital',
                'disaster recovery',
                'mortalities',
                'public policy',
                'disasters'
            ]
        },
        topic: {
            hazard: null,
            system: 'Social Networks',
            scale: 'Community',
            case: [],
            motivation: [
                'human loss',
                'economic loss'
            ],
            objective: [
                'aid decision making',
                'highlight social infrastructure'
            ]
        },
        methods: [
            'social capital measurement'
        ],
        results: [
            'policy recommendations'
        ]
    },{
        details: {
            journal: 'Renewable and Sustainable Energy Review',
            year: 2016,
            title: 'On the Definition of Cyber-Physical Resilience in Power Systems',
            authors: [
                'Arghandeh',
                'Meier',
                'Mehrmanesh',
                'Mili'
            ],
            depts: [
                'Electrical and Computer Engineering'
            ],
            keywords: [
                'resilience',
                'power systems',
                'cyber-physical systems',
                'vulnerability',
                'smart grids',
                'microgrids'
            ]
        },
        topic: {
            hazard: null,
            system: 'Electric Grids',
            scale: null,
            case: [],
            motivation: [
                'advanced sensors',
                'intelligent automation',
                'communication networks',
                'information technologies',
                'power outages'
            ],
            objective: [
                'define cyber-physical resilience'
            ]
        },
        methods: [],
        results: [
            'definitions',
            'metrics'
        ]
    },{
        details: {
            journal: 'International Journal of Disaster Risk Reduction',
            year: 2017,
            title: 'Operationalizing a Concept: The Systematic Review of Composite Indicator Building for Measuring Community Disaster Resilience',
            authors: [
                'Asadzadeh',
                'Kotter',
                'Salehi',
                'Birkmann'
            ],
            depts: [
                'Urban Planning and Landscape',
                'Geodesy'
            ],
            keywords: [
                'disaster resilience',
                'operationalizing',
                'composite indicators building',
                'systematic survey'
            ]
        },
        topic: {
            hazard: null,
            system: null,
            scale: null,
            case: [],
            motivation: [
                'several frameworks'
            ],
            objective: [
                'standardize framework selection'
            ]
        },
        methods: [
            'composite indicators',
            'systematic survey'
        ],
        results: [
            'metalevel framework',
            'resilience assessments originate from socio-ecological or engineering fields',
            'resilience measures can be deductive or inductive'
        ]
    },{
        details: {
            journal: 'Risk Analysis',
            year: 2011,
            title: 'On Some Recent Definitions and Analysis Frameworks for Risk, Vulnerability and Resilience',
            authors: [
                'Aven'
            ],
            depts: [],
            keywords: [
                'resilience',
                'risk',
                'systems-based approach',
                'uncertainties',
                'vulnerability'
            ]
        },
        topic: {
            hazard: null,
            system: null,
            scale: null,
            case: [],
            motivation: [
                'uncertainty in risk'
            ],
            objective: [
                'include uncertainty in vulnerability',
                'include uncertainty in resilience'
            ]
        },
        methods: [],
        results: [
            'definitions'
        ]
    },{
        details: {
            journal: 'ASCE',
            year: 2015,
            title: 'Practical Resilience Metrics for Planning, Design and Decision Making',
            authors: [
                'Ayyub'
            ],
            depts: [
                'Civil and Environmental Engineering'
            ],
            keywords: [
                'community',
                'definitions',
                'failure',
                'measures',
                'metrics',
                'recovery',
                'resilience',
                'risk',
                'robustness'
            ]
        },
        topic: {
            hazard: null,
            system: null,
            scale: null,
            case: [],
            motivation: [
                'several metrics'
            ],
            objective: [
                'relate resilience to reliability',
                'relate resilience to risk',
                'compare metrics',
                'define recovery profiles'
            ]
        },
        methods: [],
        results: [
            'definitions',
            'recovery profiles: linear and step functions'
        ]
    },{
        details: {
            journal: 'Risk Analysis',
            year: 2014,
            title: 'Stochastic Measures of Network Resilience: Applications to Waterway Commodity Flows',
            authors: [
                'Baroud',
                'Ramirez-Marquez',
                'Barker',
                'Rocco'
            ],
            depts: [
                'Industrial and Systems Engineering'
            ],
            keywords: [
                'Copeland score',
                'infrastructure',
                'networks',
                'resilience',
                'stochastic ranking'
            ]
        },
        topic: {
            hazard: null,
            system: 'Waterway Networks',
            scale: null,
            case: [
                'Mississippi River'
            ],
            motivation: [
                'network disruptions'
            ],
            objective: [
                'treat vulnerability as random variable',
                'treat recoverability as random variable',
                'include time to system restoration'
            ]
        },
        methods: [
            'nonparametric stochastic ranking',
            'Copeland score'
        ],
        results: [
            'definitions',
            'resilience dimensions: (1) reliability, (2) vulnerability, (3) survivability and (4) recoverability',
            'network resilience: (1) component and (2) network performance'
        ]
    },{
        details: {
            journal: 'Journal of Child and Adolescent Trauma',
            year: 2008,
            title: 'Building Resilience in Schools in the Wake of Hurricane Katrina',
            authors: [
                'Baum',
                'Rotter',
                'Reidler',
                'Brom'
            ],
            depts: [],
            keywords: [
                'natural disasters',
                'trauma',
                'school-based intervention',
                'teacher workshop',
                'post-disaster intervention',
                'resilience building',
                'disaster mental health',
                'crisis intervention'
            ]
        },
        topic: {
            hazard: null,
            system: null,
            scale: null,
            case: [
                'Hurricane Katrina',
                'Gulf Coast'
            ],
            motivation: [
                'poor health',
                'insufficient access to care',
                'unemployment',
                'migration',
                'government bureaucracies',
                'insurance bureaucracies',
                'post-traumatic symptoms'
            ],
            objective: []
        },
        methods: [],
        results: []
    },{
        details: {
            journal: 'Progress in Planning',
            year: 2015,
            title: 'Towards Seaport Resilience for Climate Change Adaptation: Stakeholder Perceptions of Hurricane Impacts in Gulfport, MI and Providence, RI',
            authors: [
                'Becker',
                'Matson',
                'Fischer',
                'Mastrandrea'
            ],
            depts: [
                'Marine Studies',
                'Environmental Studies',
                'Earth, Atmospheric and Planetary Sciences',
                'Civil and Environmental Engineering'
            ],
            keywords: [
                'climate change',
                'adaptation',
                'resilience',
                'disasters',
                'seaports',
                'stakeholder analysis',
                'impact assessment'
            ]
        },
        topic: {
            hazard: 'Hurricanes',
            system: 'Seaports',
            scale: null,
            case: [
                'Mississippi',
                'Rhode Island'
            ],
            motivation: [
                'climate change',
                'stakeholder perceptions',
                'stakeholder concerns'
            ],
            objective: [
                'aid decision making',
                'emphasize human factor'
            ]
        },
        methods: [
            'empirical evidence'
        ],
        results: [
            'port stakholders identified wide range of direct damages, indirect costs and intangible consequences of hurricanes',
            'impacts result in costs that affect all port stakeholders',
            'plans and policies do not include port stakeholders concerns'
        ]
    },{
        details: {
            journal: 'Social Indicators Research',
            year: 2015,
            title: 'Assessing the Relationship Between Social Vulnerability and Community Resilience to Hazards',
            authors: [
                'Bergstrand',
                'Mayer',
                'Brumback',
                'Zhang'
            ],
            depts: [
                'Sociology',
                'Biostatistics'
            ],
            keywords: [
                'social vulnerability',
                'community resilience',
                'disasters',
                'hazard indicators'
            ]
        },
        topic: {
            hazard: null,
            system: null,
            scale: 'Community',
            case: [],
            motivation: [],
            objective: [
                'correlate social vulnerability to community resilience',
                'map vulnerable communities'
            ]
        },
        methods: [
            'social vulnerability measurement',
            'community resilience measurement'
        ],
        results: []
    },{
        details: {
            journal: 'Childhood Education',
            year: 2012,
            title: 'Building Resilience to Trauma: Creating a Safe and Supportive Early Childhood Classroom',
            authors: [
                'Berson',
                'Baggerly'
            ],
            depts: [],
            keywords: []
        },
        topic: {
            hazard: null,
            system: null,
            scale: null,
            case: [],
            motivation: [
                'post-traumatic symptoms'
            ],
            objective: []
        },
        methods: [],
        results: []
    },{
        details: {
            journal: 'IEEE',
            year: 2017,
            title: 'Battling the Extreme: A Study on the Power System Resilience',
            authors: [
                'Bie',
                'Lin',
                'Li, G.',
                'Li, F.'
            ],
            depts: [
                'Electrical and Computer Engineering'
            ],
            keywords: [
                'critical infrastructure',
                'extreme events',
                'natural disasters',
                'power systems',
                'resilience'
            ]
        },
        topic: {
            hazard: null,
            system: 'Electrical Grid',
            scale: null,
            case: [],
            motivation: [],
            objective: [
                'summarize government practices',
                'evaluate metrics',
                'evaluate methodologies'
            ]
        },
        methods: [],
        results: [
            'load restoration framework',
            'challenges: extreme event modeling, practical barriers and interdependence with other critical infrastructure'
        ]
    },{
        details: {
            journal: 'Natural Hazards',
            year: 2012,
            title: "Bronfenbrenner's Bioecological Theory for Modelling Community Resilience to Natural Disasters",
            authors: [
                'Boon',
                'Cottrell',
                'King',
                'Stevenson',
                'Millar'
            ],
            depts: [
                'Education',
                'Disaster Studies',
                'Environmental Studies'
            ],
            keywords: [
                'resilience',
                'natural disasters',
                'Bronfenbrenners bioecological theory',
                'community',
                'climate change'
            ]
        },
        topic: {
            hazard: null,
            system: null,
            scale: 'Various',
            case: [],
            motivation: [
                'climate change'
            ],
            objective: [
                'outline resilience as a trait',
                'outline resilience as a process'
            ]
        },
        methods: [
            'Bronfenbrenners bioecological theory'
        ],
        results: [
            'Bronfenbrenners can be used to (1) benchmark social resilience, (2) target priority interventions required and (3) measure progress arising from interventions'
        ]
    },{
        details: {
            journal: 'Reliability Engineering and System Safety',
            year: 2018,
            title: 'Resilience Science, Policy and Investment for Civil Infrastructure',
            authors: [
                'Bostick',
                'Connelly',
                'Lambert',
                'Linkov'
            ],
            depts: [
                'US Army Corps'
            ],
            keywords: [
                'resilience',
                'policy',
                'cost-effective',
                'recovery',
                'investment',
                'infrastructure'
            ]
        },
        topic: {
            hazard: 'Hurricanes',
            system: 'Critical Infrastructure',
            scale: null,
            case: [],
            motivation: [
                'blows to resilience paradigms'
            ],
            objective: [
                'motivate resilience assessment',
                'aid decision making'
            ]
        },
        methods: [],
        results: []
    },{
        details: {
            journal: 'Sustainability',
            year: 2017,
            title: 'Urban Resilience: A Civil Engineering Perspective',
            authors: [
                'Bozza',
                'Asprone',
                'Fabbrocino'
            ],
            depts: [
                'Civil and Environmental Engineering',
                'Architecture'
            ],
            keywords: [
                'resilience',
                'natural disasters',
                'networked infrastructures',
                'civil engineering'
            ]
        },
        topic: {
            hazard: null,
            system: null,
            scale: 'Urban',
            case: [],
            motivation: [],
            objective: [
                'approach resilience according to networks theory'
            ]
        },
        methods: [
            'networks theory'
        ],
        results: []
    },{
        details: {
            journal: 'Politics',
            year: 2013,
            title: 'Producing and Governing Community Resilience',
            authors: [
                'Bulley'
            ],
            depts: [],
            keywords: [
                'governmentality',
                'community',
                'resilience',
                'power',
                'responsibility'
            ]
        },
        topic: {
            hazard: null,
            system: null,
            scale: null,
            case: [],
            motivation: [
                'community behavior',
                'empowerment',
                'identities',
                'poverty',
                'inequality'
            ],
            objective: [
                'promote government'
            ]
        },
        methods: [],
        results: []
    },{
        details: {
            journal: 'Annals of the Association of American Geographers',
            year: 2014,
            title: 'A Validation of Metrics for Community Resilience to Natural Hazards and Disasters Using the Recovery from Hurricane Katrina as a Case Study',
            authors: [
                'Burton'
            ],
            depts: [],
            keywords: []
        },
        topic: {
            hazard: 'Hurricanes',
            system: null,
            scale: 'Subcounty',
            case: [
                'Hurricane Katrina',
                'Mississippi'
            ],
            motivation: [
                'several metrics'
            ],
            objective: [
                'compare communities',
                'standardize metric selection'
            ]
        },
        methods: [],
        results: [
            'metrics',
            'dimensions: (1) social, (2) economic, (3) institutional, (4) infrastructural, (5) community-based and (6) environmental'
        ]
    },{
        details: {
            journal: 'Water',
            year: 2016,
            title: 'Assessing Community Resilience to Coastal Hazards in the Lower Mississippi River Basin',
            authors: [
                'Cai',
                'Lam',
                'Zou',
                'Qiang',
                'Li'
            ],
            depts: [
                'Environmental Studies'
            ],
            keywords: [
                'community resilience',
                'Lower Mississippi River Basin',
                'resilience inference measurement',
                'disaster recovery',
                'coastal hazards',
                'spatial analysis',
                'multivariate statistics'
            ]
        },
        topic: {
            hazard: null,
            system: null,
            scale: 'Census Block',
            case: [
                'Lower Mississippi River Basin',
                'Louisiana'
            ],
            motivation: [],
            objective: [
                'identify relationships between socio-environmental indicators and community resilience'
            ]
        },
        methods: [
            'resilience inference measurement',
            'K-means cluster analysis',
            'discriminant analysis',
            'regression analysis'
        ],
        results: [
            'higher resilience in northern parts',
            'lower resilience on coastline and in lower elevation areas',
            'policy recommendations'
        ]
    },{
        details: {
            journal: 'Procedia Engineering',
            year: 2016,
            title: 'Assessing the Resilience of LEED Certified Green Buildings',
            authors: [
                'Champagne',
                'Aktas'
            ],
            depts: [
                'Civil and Environmental Engineering'
            ],
            keywords: [
                'LEED',
                'green buildings',
                'resilience',
                'natural disasters',
                'regional priority'
            ]
        },
        topic: {
            hazard: null,
            system: null,
            scale: null,
            case: [],
            motivation: [
                'sustainable design',
                'climate change',
                'more frequent events',
                'more severe events',
                'synergistic opportunities'
            ],
            objective: [
                'integrate resilient design into LEED certification system',
                'introduce credits for regional needs'
            ]
        },
        methods: [],
        results: []
    },{
        details: {
            journal: 'American Journal of Public Health',
            year: 2013,
            title: 'Getting Actionable About Community Resilience: The Los Angeles County Community Disaster Resilience Project',
            authors: [
                'Chandra',
                'Williams',
                'Plough',
                'Slayton',
                'Wells',
                'Horta',
                'Tang'
            ],
            depts: [],
            keywords: []
        },
        topic: {
            hazard: null,
            system: null,
            scale: 'County',
            case: [
                'Los Angeles'
            ],
            motivation: [
                'disaster preparedness',
                'community health promotion',
                'partnerships'
            ],
            objective: []
        },
        methods: [
            'baseline survey'
        ],
        results: [
            'community-based organization staff devote minimal time to community disaster preparedness',
            'policy recommendations'
        ]
    },{
        details: {
            journal: 'ASCE',
            year: 2016,
            title: 'PEOPLES: A Framework for Evaluating Resilience',
            authors: [
                'Cimellaro',
                'Renschler',
                'Reinhorn',
                'Arendt'
            ],
            depts: [
                'Civil and Environmental Engineering',
                'Geography',
                'Management'
            ],
            keywords: [
                'resilience',
                'disaster resilience',
                'infrastructure',
                'performance metrics',
                'community resilience',
                'environment and ecosystem',
                'organized governmental services',
                'physical infrastructure',
                'structural safety and reliability'
            ]
        },
        topic: {
            hazard: null,
            system: null,
            scale: 'Various',
            case: [],
            motivation: [
                'measure community resilience at different spatial scales',
                'measure community resilience at different temporal scales',
                'determine resilience index',
                'aid decision making'
            ],
            objective: []
        },
        methods: [],
        results: [
            'dimensions of community resilience: (1) population and demographics, (2) environmental and ecosystem, (3) organized governmental services, (4) physical infrastructure, (5) lifestyle and community competence, (6) economic development and (7) socio-cultural capital'
        ]
    },{
        details: {
            journal: 'Natural Hazards',
            year: 2009,
            title: 'Social Memory and Resilience in New Orleans',
            authors: [
                'Colten',
                'Sumpter'
            ],
            depts: [
                'Geography',
                'Anthropology'
            ],
            keywords: [
                'resilience',
                'social memory',
                'hurricanes',
                'emergency preparations',
                'New Orleans',
                'Hurricane Katrina'
            ]
        },
        topic: {
            hazard: null,
            system: null,
            scale: null,
            case: [
                'Hurricane Betsy',
                'Hurricane Katrina',
                'Louisiana'
            ],
            motivation: [
                'collective memory',
                'historical records',
                'repeated mistakes'
            ],
            objective: [
                'promote collective memory'
            ]
        },
        methods: [
            'historical records compilation'
        ],
        results: [
            'historical records were neglected'
        ]
    },{
        details: {
            journal: 'Ecology and Society',
            year: 2012,
            title: 'Community Resilience and Oil Spills in Coastal Louisiana',
            authors: [
                'Colten',
                'Hay',
                'Giancarlo'
            ],
            depts: [
                'Geography',
                'Anthropology'
            ],
            keywords: [
                'Gulf Coast',
                'oil spills',
                'resilience'
            ]
        },
        topic: {
            hazard: 'Oil Spills',
            system: null,
            scale: null,
            case: [
                'Louisiana'
            ],
            motivation: [
                'natural-resource dependence',
                'collective memory'
            ],
            objective: [
                'examine inherent resilience',
                'assess externally managed contingency planning procedures'
            ]
        },
        methods: [
            'comparative historical analysis',
            'Wilbanks four elements of resilience'
        ],
        results: [
            'Wilbanks four elements of resilience: (1) anticipation, (2) reduced vulnerability, (3) response and (4) recovery'
        ]
    },{
        details: {
            journal: 'Public Organization Review',
            year: 2009,
            title: 'The Dynamics of Disaster Recovery: Resilience and Entropy in Hurricane Response Systems 2005-2008',
            authors: [
                'Comfort',
                'Oh',
                'Ertan'
            ],
            depts: [
                'Public and International Affairs'
            ],
            keywords: [
                'dynamic systems',
                'resilience',
                'social entropy',
                'network evolution',
                'disaster recovery'
            ]
        },
        topic: {
            hazard: null,
            system: null,
            scale: null,
            case: [
                'Hurricane Katrina',
                'Hurricane Gustav',
                'Louisiana'
            ],
            motivation: [
                'sustainable risk reduction'
            ],
            objective: [
                'explore balance between resilience and entropy'
            ]
        },
        methods: [],
        results: []
    },{
        details: {
            journal: 'Risk Analysis',
            year: 2012,
            title: 'Community Resilience and Decision Theory Challenges for Catastrophic Events',
            authors: [
                'Cox'
            ],
            depts: [],
            keywords: [
                'catastrophe risks',
                'chaos',
                'community resilience',
                'complex systems',
                'decision analysis challenges',
                'disaster planning',
                'expected utility theory',
                'extreme events',
                'fat tails',
                'group decisions',
                'morals',
                'mores',
                'power laws',
                'self-organizing criticality'
            ]
        },
        topic: {
            hazard: null,
            system: null,
            scale: null,
            case: [],
            motivation: [
                'normative risk management',
                'rare events',
                'probability neglect',
                'distorted risk perceptions'
            ],
            objective: [
                'clarify where and when new methods are needed to complement traditional decision making'
            ]
        },
        methods: [],
        results: [
            'prospective and retrospective preferences may conflict',
            'combining individual beliefs or preferences may produce collective decisions that no one favors',
            'individual choices or behaviors may have no equilibrium'
        ]
    },{
        details: {
            journal: 'Public Health Practice',
            year: 2017,
            title: 'Promoting Community Preparedness and Resilience: A Latino Immigrant Community-Driven Project Following Hurricane Sandy',
            authors: [
                'Cuervo',
                'Leopold',
                'Baron'
            ],
            depts: [],
            keywords: []
        },
        topic: {
            hazard: null,
            system: null,
            scale: null,
            case: [
                'Hurricane Sandy',
                'New York',
                'New Jersey'
            ],
            motivation: [
                'preparedness planning',
                'Latino immigrants',
                'community-university-labor union partnership'
            ],
            objective: []
        },
        methods: [],
        results: [
            'connecting workers and community-based organizations with local disaster preparedness systems benefits disaster planners and local immigrant communities'
        ]
    },{
        details: {
            journal: 'Journal of Homeland Security and Emergency Management',
            year: 2010,
            title: 'Disaster Resilience Indicators for Benchmarking Baseline Conditions',
            authors: [
                'Cutter',
                'Burton',
                'Emrich'
            ],
            depts: [],
            keywords: [
                'disaster resilience',
                'indicators',
                'Southeastern United States'
            ]
        },
        topic: {
            hazard: null,
            system: null,
            scale: null,
            case: [
                'Southeastern United States'
            ],
            motivation: [
                'several metrics'
            ],
            objective: [
                'establish baseline conditions',
                'compare communities'
            ]
        },
        methods: [],
        results: [
            'higher resilience in metropolitan areas than rural counties',
            'resilience drivers: (1) social, (2) economic, (3) institutional, (4) infrastructure and (5) community capacities'
        ]
    },{
        details: {
            journal: 'Environment',
            year: 2013,
            title: 'Disaster Resilience: A National Imperative',
            authors: [
                'Cutter',
                'Ahearn',
                'Amadei',
                'Crawford',
                'Eide',
                'Galloway',
                'Goodchild',
                'Kunreuther',
                'Li-Vollmer',
                'Schoch-Spana',
                'Scrimshaw',
                'Stanley',
                'Whitney',
                'Zoback'
            ],
            depts: [],
            keywords: []
        },
        topic: {
            hazard: null,
            system: null,
            scale: null,
            case: [],
            motivation: [],
            objective: []
        },
        methods: [],
        results: []
    },{
        details: {
            journal: 'Global Environmental Change',
            year: 2014,
            title: 'The Geographies of Community Disaster Resilience',
            authors: [
                'Cutter',
                'Ash',
                'Emrich'
            ],
            depts: [
                'Geography'
            ],
            keywords: [
                'resilience',
                'indicators',
                'SoVI',
                'United States',
                'BRIC'
            ]
        },
        topic: {
            hazard: null,
            system: null,
            scale: 'County',
            case: [],
            motivation: [
                'several metrics'
            ],
            objective: [
                'map vulnerable communities',
                'aid decision making'
            ]
        },
        methods: [
            'baseline resilience indicators for communities'
        ],
        results: [
            'six capitals: (1) social, (2) economic, (3) housing and infrastructure, (4) institutional, (5) community and (6) environmental',
            'most resilient: (1) Midwest and (2) Great Plains',
            'least resilient: (1) US-Mexico border and (2) Appalachian ridge'
        ]
    },{
        details: {
            journal: 'Natural Hazards',
            year: 2016,
            title: 'The Landscape of Disaster Resilience Indicators in the USA',
            authors: [
                'Cutter'
            ],
            depts: [],
            keywords: [
                'disaster resilience indicators',
                'measuring community resilience',
                'United States'
            ]
        },
        topic: {
            hazard: null,
            system: null,
            scale: null,
            case: [],
            motivation: [
                'several metrics'
            ],
            objective: [
                'delineate common concepts',
                'delineate common variables'
            ]
        },
        methods: [
            'examination of resilience assessment tools',
            'examination of base case studies using tools'
        ],
        results: [
            'tool parameters: (1) focus, (2) spatial orientation, (3) methodology and (4) domain area',
            'attributes and assets: (1) economic, (2) social, (3) environmental and (4) infrastructure',
            'capacities: (1) social capital, (2) community functions, (3) connectivity and (4) planning'
        ]
    },{
        details: {
            journal: 'Planning Theory and Practice',
            year: 2012,
            title: 'Resilience: A Bridging Concept or a Dead End?',
            authors: [
                'Davoudi',
                'Shaw',
                'Haider',
                'Quinlan',
                'Peterson',
                'Wilkinson',
                'Funfgeld',
                'McEvoy',
                'Porter'
            ],
            depts: [
                'Architecture',
                'Urban Planning and Landscape'
            ],
            keywords: []
        },
        topic: {
            hazard: null,
            system: null,
            scale: null,
            case: [],
            motivation: [],
            objective: []
        },
        methods: [],
        results: []
    },{
        details: {
            journal: 'Gender and Development',
            year: 2015,
            title: 'Women Rebuilding Lives Post-Disaster: Innovative Community Practices for Building Resilience and Promoting Sustainable Development',
            authors: [
                'Drolet',
                'Dominelli',
                'Alston',
                'Ersing',
                'Mathbor',
                'Wu'
            ],
            depts: [],
            keywords: [
                'resilience',
                'disasters',
                'recovery',
                'gender',
                'partnership'
            ]
        },
        topic: {
            hazard: null,
            system: null,
            scale: null,
            case: [
                'Pakistan',
                'United States'
            ],
            motivation: [
                'womens active participation',
                'post-2015 Sustainable Development Goals'
            ],
            objective: [
                'highlight womens active participation'
            ]
        },
        methods: [],
        results: []
    },{
        details: {
            journal: 'Regional Environmental Change',
            year: 2012,
            title: 'Livelihoods and Landscapes at the Threshold of Change: Disaster and Resilience in a Chiapas Coffee Community',
            authors: [
                'Eakin',
                'Benessaiah',
                'Barrera',
                'Cruz-Bello',
                'Morales'
            ],
            depts: [
                'Geography',
                'Urban Planning and Landscape',
                'Ecology Studies'
            ],
            keywords: [
                'vulnerability',
                'adaptation',
                'disasters',
                'resilience',
                'Mexico',
                'coffee',
                'maize'
            ]
        },
        topic: {
            hazard: 'Hurricanes',
            system: 'Agriculture',
            scale: 'Community',
            case: [
                'Hurricane Stan',
                'Mexico'
            ],
            motivation: [
                'household vulnerability'
            ],
            objective: [
                'relate adaptive responses to landscape-level land-cover changes',
                'aid decision making'
            ]
        },
        methods: [
            'household surveys',
            'cluster analysis'
        ],
        results: [
            'highest degree of livelihood change: land-constrained households',
            'higher exposure and sensitivity, lower adaptive capacity',
            'policy recommendations'
        ]
    },{
        details: {
            journal: 'Structural Safety',
            year: 2017,
            title: 'Measuring and Enhancing Resilience of Building Portfolios Considering the Functional Interdependence Among Community Sectors',
            authors: [
                'Feng',
                'Wang',
                'Li',
                'Lin'
            ],
            depts: [
                'Civil and Environmental Engineering'
            ],
            keywords: [
                'building inventory',
                'building retrofits',
                'community functionality',
                'community resilience',
                'interdependency',
                'optimization'
            ]
        },
        topic: {
            hazard: null,
            system: null,
            scale: null,
            case: [
                'Hypothetical earthquakes',
                'China'
            ],
            motivation: [
                'occupancy types'
            ],
            objective: [
                'establish new metrics',
                'quantify community functionality'
            ]
        },
        methods: [],
        results: [
            'essential functions: (1) housing, (2) education, (3) business and (4) public services',
            'resilience metric: number of households dislocated',
            'retrofit optimization algorithm'
        ]
    },{
        details: {
            journal: 'Environmental Systems Decisions',
            year: 2015,
            title: 'A Matrix Approach to Community Resilience Assessment: An Illustrative Case at Rockaway Peninsula',
            authors: [
                'Fox-Lent',
                'Bates',
                'Linkov'
            ],
            depts: [
                'US Army Corps'
            ],
            keywords: [
                'community resilience',
                'resilience matrix',
                'Rockaway',
                'resilience assessment'
            ]
        },
        topic: {
            hazard: null,
            system: null,
            scale: null,
            case: [
                'Sandy',
                'Rockaway',
                'New York'
            ],
            motivation: [
                'standard metrics'
            ],
            objective: [
                'reference temporality of disruptive events'
            ]
        },
        methods: [
            'Linkovs resilience matrix',
            'local stakeholder-informed metrics'
        ],
        results: [
            'Linkovs resilience matrix is flexible'
        ]
    },{
        details: {
            journal: 'Reliability Engineering and System Safety',
            year: 2013,
            title: 'A Metric and Frameworks for Resilience Analysis of Engineered and Infrastructure Systems',
            authors: [
                'Francis',
                'Bekera'
            ],
            depts: [
                'Engineering Management',
                'Industrial and Systems Engineering'
            ],
            keywords: [
                'resilience analysis',
                'resilience metrics',
                'uncertainty analysis',
                'deep uncertainty'
            ]
        },
        topic: {
            hazard: null,
            system: null,
            scale: null,
            case: [],
            motivation: [
                'several metrics'
            ],
            objective: [
                'investigate deep uncertainties'
            ]
        },
        methods: [],
        results: [
            'proposed framework: (1) system identification, (2) resilience objective setting, (3) vulnerability analysis and (4) stakeholder engagement',
            'resilience capacities: (1) adaptive capacity, (2) absorptive capacity and (3) recoverability',
            'uncertainty-weighted resilience metric',
            'unresolved discussion: epistemological versus inherent resilience',
            'unresolved discussion: ecological versus engineered resilience',
            'uncertainties about highly uncertain, unforeseeable or unknowable hazards in design and management activities'
        ]
    },{
        details: {
            journal: 'IEEE',
            year: 2017,
            title: 'Resilience-Oriented Pre-Hurricane Resource Allocation in Distribution Systems Considering Electric Buses',
            authors: [
                'Gao',
                'Chen',
                'Mei',
                'Huang',
                'Xu'
            ],
            depts: [
                'Electrical and Computer Engineering'
            ],
            keywords: [
                'disaster preparedness',
                'electrical vehicles',
                'power distribution',
                'resilience',
                'resource allocation',
                'transportation systems'
            ]
        },
        topic: {
            hazard: null,
            system: 'Distribution',
            scale: null,
            case: [],
            motivation: [
                'restoration costs',
                'resource allocation',
                'diesel oil',
                'batteries'
            ],
            objective: [
                'discuss effects of resources transportation cost on allocation plan',
                'discuss effects of initial distribution of electric buses on allocation plan',
                'discuss effects of hurricane severity on allocation plan'
            ]
        },
        methods: [
            'service outage critical load',
            'heuristic method',
            'mixed-integer linear program',
        ],
        results: []
    },{
        details: {
            journal: 'IEEE',
            year: 2018,
            title: 'Toward a Consensus on the Definition and Taxonomy of Power System Resilience',
            authors: [
                'Gholami',
                'Shekari',
                'Amirioun',
                'Aminifar',
                'Amini',
                'Sargolzaei'
            ],
            depts: [
                'Electrical and Computer Engineering'
            ],
            keywords: [
                'high-impact rare events',
                'power system restoration',
                'proactive management',
                'resilience assessment',
                'resilience improvement'
            ]
        },
        topic: {
            hazard: null,
            system: 'Electric Grids',
            scale: null,
            case: [],
            motivation: [
                'high-impact rare events',
                'stress and strain on decisions of system operators'
            ],
            objective: [
                'define high-impact rare events',
                'provide all-inclusive picture',
                'aid decision making'
            ]
        },
        methods: [],
        results: [
            'resilience-oriented framework',
            'policy recommendations'
        ]
    },{
        details: {
            journal: 'ASCE',
            year: 2016,
            title: 'Multiple-Hazard Fragility and Restoration Models of Highway Bridges for Regional Risk and Resilience Assessment in the United States: State-of-the-Art Review',
            authors: [
                'Gidaris',
                'Padgett',
                'Barbosa',
                'Chen',
                'Cox',
                'Webb',
                'Cerato'
            ],
            depts: [
                'Civil and Environmental Engineering',
                'Environmental Studies'
            ],
            keywords: [
                'highway bridges',
                'fragility',
                'restoration',
                'multi-hazard',
                'probabilistic risk assessment',
                'resilience',
                'earthquakes',
                'hurricanes',
                'tsunamis',
                'riverine floods',
                'structural safety and reliability'
            ]
        },
        topic: {
            hazard: null,
            system: 'Highway',
            scale: null,
            case: [
                'United States'
            ],
            motivation: [
                'prehazard mitigation',
                'posthazard mitigation',
                'emergency response strategies'
            ],
            objective: [
                'quantify risk',
                'quantify resilience',
                'review state-of-the-art'
            ]
        },
        methods: [
            'fragility models',
            'restoration models'
        ],
        results: []
    },{
        details: {
            journal: 'Risk Analysis',
            year: 2009,
            title: 'On the Definition of Resilience in Systems',
            authors: [
                'Haimes'
            ],
            depts: [
                'Industrial and Systems Engineering'
            ],
            keywords: []
        },
        topic: {
            hazard: null,
            system: null,
            scale: null,
            case: [],
            motivation: [],
            objective: []
        },
        methods: [],
        results: []
    },{
        details: {
            journal: 'Risk Analysis',
            year: 2009,
            title: 'Improving the Predictive Accuracy of Hurricane Power Outage Forecasts Using Generalized Additive Models',
            authors: [
                'Han',
                'Guikema',
                'Quiring'
            ],
            depts: [
                'Civil and Environmental Engineering',
                'Geography'
            ],
            keywords: [
                'count data regression',
                'generalized additive model',
                'hurricanes',
                'power system reliability'
            ]
        },
        topic: {
            hazard: 'Hurricanes',
            system: 'Electric Grid',
            scale: null,
            case: [
                'Gulf Coast'
            ],
            motivation: [
                'rapid restoration',
                'severity of storm',
                'risk of power outages'
            ],
            objective: [
                'obtain predictive accuracy'
            ]
        },
        methods: [
            'generalized additive model'
        ],
        results: []
    },{
        details: {
            journal: 'Reliability Engineering and System Safety',
            year: 2011,
            title: 'Generic Metrics and Quantitative Approaches for System Resilience as a Function of Time',
            authors: [
                'Henry',
                'Ramirez-Marquez'
            ],
            depts: [
                'Industrial and Systems Engineering'
            ],
            keywords: [
                'network analysis',
                'system resilience',
                'quantitative methods',
                'restoration'
            ]
        },
        topic: {
            hazard: null,
            system: 'Highway',
            scale: null,
            case: [],
            motivation: [],
            objective: [
                'standardize metric selection',
                'quantify resilience'
            ]
        },
        methods: [],
        results: [
            'metrics: (1) time for resilience and (2) total cost of resilience',
            'key parameters: (1) disruptive events, (2) component restoration and (3) overall resilience strategy'
        ] 
    },{
        details: {
            journal: 'Systems Engineering',
            year: 2016,
            title: 'On the Impacts of Power Outages During Hurricane Sandy: A Resilience-Based Analysis',
            authors: [
                'Henry',
                'Ramirez-Marquez'
            ],
            depts: [
                'Industrial and Systems Engineering'
            ],
            keywords: [
                'resilience',
                'power outages',
                'Hurricane Sandy',
                'impacts',
                'metrics'
            ]
        },
        topic: {
            hazard: null,
            system: 'Electric Grid',
            scale: null,
            case: [
                'Hurricane Sandy'
            ],
            motivation: [
                'supply and demand'
            ],
            objective: [
                'quantify resilience',
                'aid decision making'
            ]
        },
        methods: [
            'resilience analysis',
            'generic resilience framework',
            'generic resilience metrics'
        ],
        results: [
            'policy recommendations'
        ]
    },{
        details: {
            journal: 'Reliability Engineering and System Safety',
            year: 2015,
            title: 'A Review of Definitions and Measures of System Resilience',
            authors: [
                'Hosseini',
                'Barker',
                'Ramirez-Marquez'
            ],
            depts: [
                'Industrial and Systems Engineering'
            ],
            keywords: [
                'resilience',
                'engineering systems'
            ]
        },
        topic: {
            hazard: null,
            system: null,
            scale: null,
            case: [],
            motivation: [
                'several metrics'
            ],
            objective: [
                'review qualitative approaches',
                'review quantitative approaches',
                'provide classification scheme'
            ]
        },
        methods: [],
        results: []
    },{
        details: {
            journal: 'Journal of Green Building',
            year: null,
            title: 'Health Impact Assessments: A Tool for Designing Climate Change Resilience into Green Building and Planning Projects',
            authors: [
                'Houghton'
            ],
            depts: [],
            keywords: [
                'climate change',
                'public health',
                'vulnerability',
                'adaptation',
                'resilience',
                'health impact assessment',
                'evidence-based',
                'adaptive reuse',
                'policy',
                'natural disasters',
                'heat',
                'floods',
                'sustainability',
                'LEED',
                'greenhouse gas emissions'
            ]
        },
        topic: {
            hazard: null,
            system: null,
            scale: null,
            case: [],
            motivation: [],
            objective: []
        },
        methods: [],
        results: []
    },{
        details: {
            journal: 'Frontiers of Engineering Management',
            year: 2017,
            title: 'System Resilience Enhancement: Smart Grid and Beyond',
            authors: [
                'Huang',
                'Wang',
                'Chen',
                'Guo',
                'Zhu'
            ],
            depts: [
                'Electrical and Computer Engineering'
            ],
            keywords: [
                'critical infrastructure',
                'cyber-physical systems',
                'energy systems',
                'resilience',
                'smart grids'
            ]
        },
        topic: {
            hazard: null,
            system: 'Electric Grid',
            scale: null,
            case: [],
            motivation: [
                'smart grids'
            ],
            objective: [
                'quantify resilience'
            ]
        },
        methods: [],
        results: []
    },{
        details: {
            journal: 'Trends in Ecology and Evolution',
            year: 2010,
            title: 'Rising to the Challenge of Sustaining Coral Reef Resilience',
            authors: [
                'Hughes',
                'Graham',
                'Jackson',
                'Mumby',
                'Steneck'
            ],
            depts: [
                'Oceanography',
                'Biological Sciences',
                'Marine Studies'
            ],
            keywords: []
        },
        topic: {
            hazard: null,
            system: null,
            scale: null,
            case: [],
            motivation: [
                'coral reef degradation'
            ],
            objective: []
        },
        methods: [],
        results: []
    },{
        details: {
            journal: 'Ecology and Society',
            year: 2016,
            title: 'Value of Traditional Oral Narratives in Building Climate Change Resilience: Insights from Rural Communities in Fiji',
            authors: [
                'Janif',
                'Nunn',
                'Geraghty',
                'Aalbersberg',
                'Thomas',
                'Camailakeba'
            ],
            depts: [
                'Linguistics',
                'Applied Sciences'
            ],
            keywords: [
                'adaptation',
                'climate change',
                'community',
                'Fiji',
                'oral traditions',
                'Pacific Islands',
                'resilience',
                'rural'
            ]
        },
        topic: {
            hazard: null,
            system: null,
            scale: 'Community',
            case: [
                'Pacific Islands',
                'traditional knowledge'
            ],
            motivation: [
                'climate change'
            ],
            objective: []
        },
        methods: [
            'interviews'
        ],
        results: []
    },{
        details: {
            journal: 'ASCE',
            year: 2016,
            title: 'Metrics for Evaluating and Improving Community Resilience',
            authors: [
                'Johansen',
                'Horney',
                'Tien'
            ],
            depts: [
                'Civil and Environmental Engineering',
                'Public Health'
            ],
            keywords: []
        },
        topic: {
            hazard: null,
            system: null,
            scale: null,
            case: [],
            motivation: [
                'community preparedness'
            ],
            objective: [
                'reveiw metrics',
                'review tools'
            ]
        },
        methods: [],
        results: [
            'tool categories: (1) community-level, (2) sector-specific or (3) sociological'
        ]
    },{
        details: {
            journal: 'PLoS ONE',
            year: 2010,
            title: 'Short-Term Hurricane Impacts on a Neotropical Community of Marked Birds and Implications for Early-Stage Community Resilience',
            authors: [
                'Johnson',
                'Winker'
            ],
            depts: [],
            keywords: []
        },
        topic: {
            hazard: 'Hurricanes',
            system: 'Ecosystems',
            scale: null,
            case: [
                'Hurricane Iris'
            ],
            motivation: [
                'vertebrate communities'
            ],
            objective: []
        },
        methods: [],
        results: []
    },{
        details: {
            journal: 'ASCE',
            year: 2017,
            title: 'Quantitative Framework to Assess Resilience and Risk at the Country Level',
            authors: [
                'Kammouh',
                'Dervishaj',
                'Cimellaro'
            ],
            depts: [
                'Civil and Environmental Engineering'
            ],
            keywords: [
                'community resilience',
                'vulnerability',
                'risk management',
                'Hyogo Framework for Action',
                'resilience metrics'
            ]
        },
        topic: {
            hazard: null,
            system: null,
            scale: 'Country',
            case: [],
            motivation: [],
            objective: []
        },
        methods: [
            'classical risk analysis',
            'Hyogo Framework for Action scores',
            'Hyogo Framework for Action rankings',
            'dependence tree analysis',
            'spider plots'
        ],
        results: [
            'resilience-based risk indexes'
        ]
    },{
        details: {
            journal: 'Risks, Hazards and Crisis in Public Policy',
            year: 2013,
            title: 'Disaster Preparedness and Resilience for Rural Communities',
            authors: [
                'Kapucu',
                'Hawkins',
                'Rivera'
            ],
            depts: [],
            keywords: [
                'emergency management',
                'rural communities',
                'capacity building',
                'sustainability',
                'networks',
                'disaster resilience'
            ]
        },
        topic: {
            hazard: null,
            system: null,
            scale: null,
            case: [
                'Central Florida'
            ],
            motivation: [
                'rural communities',
                'sustainability'
            ],
            objective: []
        },
        methods: [
            'surveys',
            'focus groups'
        ],
        results: [
            'collaboration is needed in tackling evolving social, economic and technological environments',
            'adaptive capacity of rural communities is expected to sustain recovery at the individual, organizational and community levels',
            'policy and programs that influence location and character of development reduce losses and create resilience'
        ]
    },{
        details: {
            journal: 'Global Environmental Change',
            year: 2010,
            title: 'Mainstreaming Local Perceptions of Hurricane Risk into Policymaking: A Case Study of Community GIS in Mexico',
            authors: [
                'Krishnamurthy',
                'Fisher',
                'Johnson'
            ],
            depts: [
                'Geography',
                'Political Science'
            ],
            keywords: [
                'hurricanes',
                'hurricane mapping',
                'disaster risk reduction',
                'participatory GIS',
                'vulnerability and capacity assessment',
                'Veracruz',
                'Mexico'
            ]
        },
        topic: {
            hazard: null,
            system: null,
            scale: null,
            case: [
                'Mexico'
            ],
            motivation: [
                'local perceptions',
                'household vulnerability'
            ],
            objective: []
        },
        methods: [
            'GIS-based model',
            'participatory GIS',
            'vulnerability and capacity assessment'
        ],
        results: [
            'household vulnerability index',
            'linking community participation with modern techniques empowers communities',
            'linking community participation with modern techniques mobilises communities capapcities to address specific vulnerabilities'
        ]
    },{
        details: {
            journal: 'Building Research and Information',
            year: 2019,
            title: 'Defining Resilience for the US Building Industry',
            authors: [
                'Kurth',
                'Keenan',
                'Sasani',
                'Linkov'
            ],
            depts: [
                'Architecture',
                'Civil and Environmental Engineering'
            ],
            keywords: [
                'building industry',
                'built environment',
                'governance',
                'metrics',
                'life cycle',
                'resilience',
                'resilience engineering'
            ]
        },
        topic: {
            hazard: null,
            system: 'Building Industry',
            scale: null,
            case: [],
            motivation: [],
            objective: [
                'mainstream resilience into building industry processes'
            ]
        },
        methods: [
            'heuristic method'
        ],
        results: [
            'barriers to mainstreaming resilience resilience into building industry processes: (1) indeterminate analytical meaning, (2) event and performance uncertainty, (3) immature regulatory standards setting and (4) untested enterprise economics'
        ]
    },{
        details: {
            journal: 'Energies',
            year: 2016,
            title: 'Quantitative Model and Metrics of Electrical Grids Resilience Evaluated at a Power Distribution Level',
            authors: [
                'Kwasinski'
            ],
            depts: [
                'Electrical and Computer Engineering'
            ],
            keywords: [
                'brittleness',
                'dependence',
                'fragility',
                'power distribution',
                'power grids',
                'resilience',
                'resistance'
            ]
        },
        topic: {
            hazard: null,
            system: 'Electric Grid',
            scale: 'Power Distribution',
            case: [],
            motivation: [
                'resistance',
                'brittleness'
            ],
            objective: [
                'measure function dependency',
                'relate resilience and dependency',
                'enable creation of tools to evaluate electric grids performance'
            ]
        },
        methods: [
            'availability as resilience metric',
            'practical examples',
            'empirical records'
        ],
        results: []
    },{
        details: {
            journal: 'Cartography and Geographic Information Science',
            year: 2015,
            title: 'Mapping and Assessing Coastal Resilience in the Caribbean region',
            authors: [
                'Lam',
                'Qiang',
                'Arenas',
                'Brito',
                'Liu'
            ],
            depts: [
                'Environmental Studies',
                'Transportation Engineering',
                'Geodesy',
                'Oceanography'
            ],
            keywords: [
                'vulnerability',
                'resilience',
                'adaptability',
                'resilience inference measurement',
                'Caribbean'
            ]
        },
        topic: {
            hazard: 'Hurricanes',
            system: null,
            scale: null,
            case: [
                'Carribean'
            ],
            motivation: [],
            objective: [
                'integrate natural and human data layers',
                'aid decision making'
            ]
        },
        methods: [
            'cartography',
            'GIS analysis',
            'resilience inference measurement'
        ],
        results: [
            'highest resilience: Turks and Caicos Islands',
            'lower resilience: Montserrat'
        ]
    },{
        details: {
            journal: 'ASCE',
            year: 2015,
            title: 'Measuring Community Resilience to Coastal Hazards Along the Northern Gulf of Mexico',
            authors: [
                'Lam',
                'Reams',
                'Li, K.',
                'Li, C.',
                'Mata'
            ],
            depts: [
                'Environmental Studies',
                'Public Health'
            ],
            keywords: [
                'disaster recovery',
                'coastal management',
                'community development',
                'spatial analysis',
                'sustainable development',
                'resilience',
                'vulnerability',
                'adaptability',
                'sustainability',
                'coastal hazards'
            ]
        },
        topic: {
            hazard: null,
            system: null,
            scale: 'City',
            case: [
                'Gulf of Mexico'
            ],
            motivation: [
                'several metrics'
            ],
            objective: [
                'quantify resilience'
            ]
        },
        methods: [
            'resilience inference measurement'
        ],
        results: [
            'RIM elements: (1) exposure, (2) damage and (3) recovery indicators',
            'RIM relationships: (1) vulnerability and (2) adaptability',
            'RIM: 94.2% classification accuracy'
        ]
    },{
        details: {
            journal: 'Journal of Human Resources in Hospitality and Tourism',
            year: 2012,
            title: 'An Assessment of Resilience: Disaster Management and Recovery for Greater New Orealns Hotels',
            authors: [
                'Lamanna',
                'Williams',
                'Childers'
            ],
            depts: [
                'Tourism',
                'Business'
            ],
            keywords: [
                'disasters',
                'evacuation',
                'resilience',
                'hotels',
                'Hurricane Gustav',
                'New Orleans'
            ]
        },
        topic: {
            hazard: null,
            system: null,
            scale: null,
            case: [
                'Hurricane Gustav',
                'New Orleans'
            ],
            motivation: [
                'residential communities'
            ],
            objective: [
                'examine reasons for and effects of business closure',
                'examine impact of losing lifeline services',
                'examine human resource challenges',
                'aid decision making'
            ]
        },
        methods: [],
        results: []
    },{
        details: {
            journal: 'Environmental Systems Decisions',
            year: 2015,
            title: 'Benchmarking Agency and Organizational Practices in Resilience Decision Making',
            authors: [
                'Larkin',
                'Fox-Lent',
                'Eisenberg',
                'Trump',
                'Wallace',
                'Chadderton',
                'Linkov'
            ],
            depts: [
                'US Army Corps',
                'Civil and Environmental Engineering'
            ],
            keywords: [
                'resilience',
                'United States government',
                'US Army Corps of Engineers',
                'federal agency'
            ]
        },
        topic: {
            hazard: null,
            system: null,
            scale: null,
            case: [],
            motivation: [
                'parallel efforts'
            ],
            objective: [
                'review resilience approaches',
                'help government agencies'
            ]
        },
        methods: [],
        results: []
    },{
        details: {
            journal: 'Environmental Sustainability',
            year: 2011,
            title: 'Climate Change and Urban Resilience',
            authors: [
                'Leichenko'
            ],
            depts: [
                'Geography'
            ],
            keywords: []
        },
        topic: {
            hazard: null,
            system: null,
            scale: null,
            case: [],
            motivation: [
                'climate change',
                'several metrics'
            ],
            objective: [
                'review resilience approaches'
            ]
        },
        methods: [],
        results: [
            'challenges: (1) responding tp equity concerns associated with uneven patterns of resilience, (2) assessing costs of implementing resilience strategies and (3) identifying options for harnessing innovation potential'
        ]
    },{
        details: {
            journal: 'PNAS',
            year: 2016,
            title: 'A Linear Relationship Between Wave Power and Erosion Determines Salt-Marsh Resilience to Violent Storms and Hurricanes',
            authors: [
                'Leonardi',
                'Ganju',
                'Fagherazzi'
            ],
            depts: [
                'Environmental Studies',
                'Geology'
            ],
            keywords: [
                'salt marsh',
                'resilience',
                'hurricanes',
                'wind waves',
                'erosion'
            ]
        },
        topic: {
            hazard: null,
            system: null,
            scale: null,
            case: [],
            motivation: [
                'land use change',
                'wave erosion',
                'sea level rise',
                'salt marsh collapse'
            ],
            objective: [
                'aid decision making'
            ]
        },
        methods: [],
        results: []
    },{
        details: {
            journal: 'International Journal of Disaster Risk Reduction',
            year: 2016,
            title: 'The Dynamics of Community Resilience Between Routine and Emergency Situations',
            authors: [
                'Leykin',
                'Lahad',
                'Cohen',
                'Goldberg',
                'Aharonson-Daniel'
            ],
            depts: [
                'Health Sciences'
            ],
            keywords: []
        },
        topic: {
            hazard: null,
            system: null,
            scale: null,
            case: [],
            motivation: [],
            objective: []
        },
        methods: [],
        results: [] 
    },{
        details: {
            journal: 'ASCE',
            year: 2012,
            title: 'Review of Methods to Assess, Design for and Mitigate Multiple Hazards',
            authors: [
                'Li',
                'Ahuja',
                'Padgett'
            ],
            depts: [
                'Civil and Environmental Engineering'
            ],
            keywords: [
                'climate change',
                'natural disasters',
                'earthquakes',
                'floods',
                'hazards',
                'hurricanes',
                'risk management'
            ]
        },
        topic: {
            hazard: null,
            system: null,
            scale: null,
            case: [],
            motivation: [
                'population growth',
                'economic development',
                'structural performance'
            ],
            objective: [
                'review multiple-hazard risk-assessment frameworks'
            ]
        },
        methods: [],
        results: []
    },{
        details: {
            journal: 'Cartography and Geographic Information Science',
            year: 2015,
            title: 'A Cyberinfrastructure for Community Resilience Assessment and Visualization',
            authors: [
                'Li',
                'Lam',
                'Qiang',
                'Zou',
                'Cai'
            ],
            depts: [
                'Environmental Studies'
            ],
            keywords: [
                'community resilience',
                'resilience inference measurement',
                'natural hazards',
                'CyberGIS',
                'web cartography'
            ]
        },
        topic: {
            hazard: null,
            system: null,
            scale: 'County',
            case: [
                'United States'
            ],
            motivation: [],
            objective: [
                'aid decision making'
            ]
        },
        methods: [
            'cartography',
            'GIS',
            'Application Programming Interface',
            'web mapping',
            'resilience inference measurement'
        ],
        results: [
            'users: (1) visualize historical natural hazards exposure and damages, (2) compute resilience indices and (3) produce maps and statistics'
        ]
    },{
        details: {
            journal: 'Journal of Geophysical Research',
            year: 2010,
            title: 'Risk Assessment of Hurricane Storm Surge for New York City',
            authors: [
                'Lin',
                'Emanuel',
                'Smith',
                'Vanmarcke'
            ],
            depts: [
                'Civil and Environmental Engineering',
                'Earth, Atmospheric and Planetary Sciences'
            ],
            keywords: []
        },
        topic: {
            hazard: 'Storm Surge',
            system: null,
            scale: null,
            case: [
                'New York City'
            ],
            motivation: [],
            objective: [
                'investigate storm surge risk'
            ]
        },
        methods: [
            'statistical/deterministic hurricane model',
            'hydrodynamic model',
            'statistical analysis of empirical data',
            'generalized Pareto distribution'
        ],
        results: []
    },{
        details: {
            journal: 'PLoS ONE',
            year: 2015,
            title: 'Psychological Resilience After Hurricane Sandy: The Influence of Individual- and Community-Level Factors on Mental Health After a Large-Scale Natural Disaster',
            authors: [
                'Lowe',
                'Sampson',
                'Gruebner',
                'Galea'
            ],
            depts: [
                'Public Health'
            ],
            keywords: []
        },
        topic: {
            hazard: null,
            system: null,
            scale: 'Census Tract',
            case: [
                'Hurricane Sandy',
                'New York City'
            ],
            motivation: [
                'post-traumatic symptoms',
                'depression symptoms'
            ],
            objective: [
                'discuss community-level factors in postdisaster mental health'
            ]
        },
        methods: [
            'multi-level multivariate models'
        ],
        results: [
            'individual-level: higher exposure, higher depression, higher PTSD',
            'community-level: higher social capital, higher PTSD',
            'community-level: higher community economic development, lower depression'
        ]
    },{
        details: {
            journal: 'Science',
            year: 2010,
            title: 'Scenario-Building for the Deepwater Horizon Oil Spill',
            authors: [
                'Machlis',
                'McNutt'
            ],
            depts: [
                'Geology'
            ],
            keywords: []
        },
        topic: {
            hazard: null,
            system: null,
            scale: null,
            case: [],
            motivation: [],
            objective: []
        },
        methods: [],
        results: []
    },{
        details: {
            journal: 'Engineering Structures',
            year: 2016,
            title: 'Tornado Fragility and Risk Assessment of an Archetype Masonry School Building',
            authors: [
                'Masoomi',
                'Lindt'
            ],
            depts: [
                'Civil and Environmental Engineering'
            ],
            keywords: [
                'tornadoes',
                'risk assessment',
                'fragility',
                'masonry',
                'school buildings',
                'hazard curves'
            ]
        },
        topic: {
            hazard: 'Tornadoes',
            system: null,
            scale: null,
            case: [],
            motivation: [
                'low-occurrence high-consequence hazards',
                'design codes',
                'performance-based seismic design'
            ],
            objective: [
                'propose performance-based design'
            ]
        },
        methods: [
            'loss estimation',
            'array of masonry material types',
            'range of designs'
        ],
        results: []
    },{
        details: {
            journal: 'Structure and Infrastructure Engineering',
            year: 2018,
            title: 'Restoration and Functionality Assessment of a Community Subjected to Tornado Hazard',
            authors: [
                'Masoomi',
                'Lindt'
            ],
            depts: [
                'Civil and Environmental Engineering'
            ],
            keywords: [
                'community-level restoration',
                'cross-dependent networks',
                'school buildings',
                'tornado paths',
                'functionality assessment',
                'community resilience',
                'social disruption',
                'business disruption'
            ]
        },
        topic: {
            hazard: 'Tornadoes',
            system: 'Infrastructure',
            scale: null,
            case: [],
            motivation: [
                'economic disruption',
                'social disruption'
            ],
            objective: [
                'aid decision making'
            ]
        },
        methods: [
            'duration of loss of funtionality',
            'quantitative models',
            'historical tornado database',
            'Monte Carlo simulation'
        ],
        results: [
            'metrics: (1) indirect economic loss and (2) social disruption'
        ]
    },{
        details: {
            journal: 'ASCE',
            year: 2018,
            title: 'Quantifying Socioeconomic Impact of a Tornado by Estimating Population Outmigration as a Resilience Metric at the Community Level',
            authors: [
                'Masoomi',
                'Lindt',
                'Peek'
            ],
            depts: [
                'Civil and Environmental Engineering',
                'Sociology'
            ],
            keywords: [
                'tornadoes',
                'population outmigration',
                'population dislocation',
                'resilient community',
                'social disruption',
                'master-planned community'
            ]
        },
        topic: {
            hazard: 'Tornadoes',
            system: 'Buildings',
            scale: 'Community',
            case: [],
            motivation: [
                'direct losses',
                'indirect losses',
                'outmigration'
            ],
            objective: [
                'aid decision making',
                'optimize master-planning'
            ]
        },
        methods: [
            'physical-socioeconomic attributes',
            'outmigration as resilience metric'
        ],
        results: [
            'recovery linked to (1) students, (2) household residents and (3) employees'
        ]
    },{
        details: {
            journal: 'ASCE',
            year: 2018,
            title: 'Wind Performance Enhancement Strategies for Residential Wood-Frame Buildings',
            authors: [
                'Masoomi',
                'Ameri',
                'Lindt'
            ],
            depts: [
                'Civil and Environmental Engineering'
            ],
            keywords: [
                'damage fragility',
                'performance assessment',
                'wood-frame buildings',
                'tornadoes',
                'hurricanes',
                'risk mitigation',
                'residential buildings'
            ]
        },
        topic: {
            hazard: 'Wind',
            system: 'Buildings',
            scale: 'Community',
            case: [],
            motivation: [],
            objective: []
        },
        methods: [
            'combinations of roof coverings',
            'combinations of roof sheathing nailing patterns',
            'combinations of roof-to-wall connection types',
            'fragility curves on component level',
            'fragility curves on building level'
        ],
        results: [
            'fragility curves for residential buildings'
        ]
    },{
        details: {
            journal: 'Environmental Impact Assessment Review',
            year: 2014,
            title: 'A Critical Analysis of Hazard Resilience Measures Within Sustainability Assessment Frameworks',
            authors: [
                'Matthews',
                'Sattler',
                'Friedland'
            ],
            depts: [
                'Architecture',
                'Construction Management'
            ],
            keywords: [
                'sustainability',
                'resilience',
                'assessment framework'
            ]
        },
        topic: {
            hazard: null,
            system: null,
            scale: null,
            case: [],
            motivation: [
                'sustainability assessment frameworks',
                'planning',
                'design',
                'construction'
            ],
            objective: [
                'incorporate hazard resistant design within sustainability assessment frameworks',
                'incorporate hazard mitigation strategies within sustainability assessment frameworks'
            ]
        },
        methods: [
            'macro-level analysis',
            'mesro-level analysis',
            'micro-level analysis'
        ],
        results: [
            'hazard resistance and hazard mitigation do not figure prominently in sustainable assessment frameworks'
        ]
    }]
};

// debugging in node
// module.exports = lit;