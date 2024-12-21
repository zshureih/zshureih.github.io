const experiences = [
    {
        text: "Designed, implemented and maintained an experiment cataloging service attached to a PostgresQL DB that is used to reproduce training results and facilitate active learning. \
            Collaborated with teammates in and outside the U.S.to deploy and verify ML models running both on the cloud and on edge devices. \
            Modified Yolo architecture to support outputting and learning from embeddings, custom class weighting, and determination of model uncertainty. \
            Presented experimental results to clients during POCs, communicating model performance and trade - offs to secure new contracts. ",
        role: "Machine Learning Engineer",
        year: "2023 - Present",
        company: "Buzz Solutions Inc.",
        keywords: "Python, Pytorch, Yolo, PostgresQL"
    },
    {
        text: "Collaborated with an international team to develop tools and models to perform semantic segmentation on milled lumber to detect defects and determine lumber grade. \
            Lead special projects in generation of synthetic data (GANs). \
            Migrated model training pipelines from Tensorflow to Pytorch and implemented multi-GPU distributed training which resulted in a 70% cost reduction in training time. \
            Mentored two interns through projects on regularizing for domain drift and semi-supervised classification problems.",
        role: "Machine Learning Engineer",
        year: "2022 - 2023",
        company: "MiCROTEC (formerly Lucidyne Technologies)",
        keywords: "Pytorch, Tensorflow, GANs, Docker, Computer Vision, Semantic Segmentation, Linux"
    },
    {
        text: "Developed intelligent agents to solve complicated computer vision, physical reasoning, and interactive robotics problems to be presented to \
            and evaluated by DARPA scientists. Delivered a top scoring physical hypothesis generator that recreates observed objects \
            in a physics engine to predict object dynamics.",
        role: "Gratuate Research Assistant: AI Software Engineer",
        year: "2021 - 2022",
        company: "Oregon State University Machine Common Sense Lab",
        keywords: "PyBullet, OpenCV, Tensorflow, Linux"
    },
    {
        text: "Designed and developed interfaces to communicate Q-learning based decision tree models, trained to play StarCraft2, to user-study participants. \
            Migrated offline application to Google Cloud Service hosted web-application. \
            Implemented and tested a user-state logging sytem in Javascript to allow research participants to recover their progress in case of network malfunction.",
        role: "Undergraduate Research Assistant: Explainable AI",
        year: "2020 - 2021",
        company: "Oregon State University Explainable AI Lab",
        keywords: "Google Cloud Services, Node.js, Javascript, jquery"
    },
    {
        text: "Developed a full-stack web application, designed microservice APIs, and managed both application and database deployment for the Oregon State Construction Contractor's Board. Migrated existing paper methods for certification approval to newly developed web-platform.",
        role: "Junior Full-Stack Developer",
        year: "2019 - 2020",
        company: "Center for Applied Systems and Software",
        keywords: "Microsoft .Net Core, Microsoft SQL Server, Microsoft IIS, C#, Github, DevOps"
    },
    {
        text: "Utilized existing computer vision techniques to segment robot generated environment maps to allow for multi-agent responses to natural disasters. Used ROS to navigate and map physical environments with Pioneer robots.",
        role: "Robotics Research Assistant",
        year: "2018 - 2019",
        company: "Collaborative Robotics and Intelligent Systems Institute",
        keywords: "Python, ROS, OpenCV, Linux"
    }
];

export default experiences;