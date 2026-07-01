const fs = require('fs');
let content = fs.readFileSync('c:/Users/PC/Downloads/fe mkt2/udata_next/components/UseCaseGrid.jsx', 'utf-8');

const enDetails1 = `      enDetails: {
        ctaText: 'Discuss factory solutions',
        sections: [
          { title: 'Context', type: 'text', content: 'Suitable for manufacturing plants with multiple production lines, equipment, sensors, and energy consumption points that need continuous monitoring. When operational data is scattered across different systems, the management team struggles to have a unified view of the factory status.' },
          { title: 'The Challenge', type: 'text', content: 'Factories need to monitor equipment status, production line performance, energy, and incidents in real-time. If data updates are delayed or require manual aggregation, businesses can easily miss abnormal operational signals.' },
          { title: 'Data to Connect', type: 'list', items: ['Equipment and sensor data', 'Production line status', 'Energy data', 'Maintenance and incident data', 'Production output and operational performance', 'Data from existing dashboards or internal systems'] },
          { title: 'How Udata Helps', type: 'list', items: ['Uboard connects field data and displays it on a real-time dashboard', 'Uboard supports tracking the status of equipment, production lines, and critical operational points', 'Ugate unifies factory data with internal systems to create a holistic view', 'Uzero can supplement energy and emissions data if the business requires sustainability management'] },
          { title: 'Metrics to Track', type: 'list', items: ['Equipment status', 'Downtime duration', 'Production line efficiency (OEE)', 'Energy consumption levels', 'Frequency of abnormal alerts', 'Incident resolution time'] },
          { title: 'Expected Value', type: 'text', content: 'Businesses can observe operations more clearly, detect bottlenecks earlier, and make data-driven decisions instead of relying on fragmented reports.' },
          { title: 'Suggested Roadmap', type: 'list', items: ['Survey production lines, equipment, and existing data sources', 'Identify data points that require real-time monitoring', 'Connect data to the operational dashboard', 'Set up alerts and tracking metrics', 'Evaluate effectiveness and expand to other operational areas'] }
        ]
      }`;

const enDetails2 = `      enDetails: {
        ctaText: 'Discuss equipment maintenance',
        sections: [
          { title: 'Context', type: 'text', content: 'Suitable for factories with many critical pieces of equipment that need systematic tracking of operational status and maintenance history. This is a common scenario for businesses wanting to reduce reliance on manual recording and personal experience.' },
          { title: 'The Challenge', type: 'text', content: 'Data on faults, alerts, maintenance history, and technical documentation are often scattered. Lacking real-time and historical data makes it difficult for technical teams to identify high-risk equipment and prioritize incident resolution.' },
          { title: 'Data to Connect', type: 'list', items: ['Equipment status', 'History of faults and alerts', 'Maintenance history', 'Operating time and downtime', 'Equipment codes, serial numbers, and locations', 'Technical documents and troubleshooting procedures'] },
          { title: 'How Udata Helps', type: 'list', items: ['Uboard tracks equipment status and real-time anomaly alerts', 'Ugate organizes equipment data, incident history, and operational information into a unified data layer', 'MiniUgate assists technical teams in querying procedures, documents, or troubleshooting guides using natural language', 'Data from incident resolutions can be saved for analysis and maintenance improvement'] },
          { title: 'Metrics to Track', type: 'list', items: ['Incident detection time', 'Incident resolution time', 'Frequency of recurring faults', 'Maintenance history by equipment', 'Equipment readiness level', 'Percentage of alerts resolved on time'] },
          { title: 'Expected Value', type: 'text', content: 'Businesses can enhance the ability to retrieve equipment history, organize maintenance processes based on data, and support technical teams in resolving incidents more consistently.' },
          { title: 'Suggested Roadmap', type: 'list', items: ['Review equipment portfolio and existing maintenance data', 'Identify priority equipment groups based on operational impact', 'Connect alert, incident, and maintenance history data', 'Set up dashboards and technical knowledge querying processes', 'Evaluate incident resolution effectiveness and expand to other equipment groups'] }
        ]
      }`;

const enDetails3 = `      enDetails: {
        ctaText: 'Discuss logistics solutions',
        sections: [
          { title: 'Context', type: 'text', content: 'Suitable for businesses with warehousing operations, logistics centers, or supply chains that need to track inventory, import/export, goods flow, and asset performance. This is especially crucial when logistics data resides in isolated systems.' },
          { title: 'The Challenge', type: 'text', content: 'Data on inventory, import/export, transportation, assets, and costs are often fragmented. With delayed information updates, businesses struggle to assess goods readiness, detect bottlenecks, and optimize operational costs.' },
          { title: 'Data to Connect', type: 'list', items: ['Inventory data', 'Import and export data', 'Goods flow status', 'Warehouse asset and equipment data', 'Transportation data', 'Related cost and financial data', 'Energy data at warehouses or logistics centers'] },
          { title: 'How Udata Helps', type: 'list', items: ['Ugate connects data from warehouses, inventory, operations, and finance to create a unified picture', 'Uboard supports tracking critical operational points in warehouse areas or logistics centers', 'Uzero helps track energy and emissions data if the business needs green management for logistics', 'Dashboards help operational teams monitor goods flow and identify bottlenecks faster'] },
          { title: 'Metrics to Track', type: 'list', items: ['Inventory status', 'Import/export flow', 'Goods processing time', 'Warehouse asset performance', 'Bottlenecks in operational flow', 'Related operational costs', 'Energy consumption at the warehouse'] },
          { title: 'Expected Value', type: 'text', content: 'Businesses improve the ability to observe goods flow, reduce reliance on manual reports, and have a clearer data foundation to optimize warehouse operations.' },
          { title: 'Suggested Roadmap', type: 'list', items: ['Survey warehouse, inventory, and transportation data flows', 'Identify common bottlenecks in operations', 'Connect data from warehouse, asset, operational, and financial systems', 'Set up dashboards to track goods flow and inventory', 'Evaluate effectiveness and expand to energy or emissions data if needed'] }
        ]
      }`;

const enDetails4 = `      enDetails: {
        ctaText: 'Discuss energy solutions',
        sections: [
          { title: 'Context', type: 'text', content: 'Suitable for factories, industrial parks, buildings, or operational facilities with multiple consumption points for electricity, water, compressed air, heat, or fuel. This is a vital scenario for businesses wanting to control resources and build a data foundation for sustainability.' },
          { title: 'The Challenge', type: 'text', content: 'Energy data often comes from various individual meters, devices, or reports. Without a unified measurement system, businesses struggle to pinpoint high-consumption areas, detect anomalies, and assess resource utilization efficiency.' },
          { title: 'Data to Connect', type: 'list', items: ['Electricity data', 'Water data', 'Compressed air data', 'Heat or fuel data', 'Infrastructure equipment data', 'Production output or activity level data', 'Energy cost data'] },
          { title: 'How Udata Helps', type: 'list', items: ['Uboard monitors equipment data, energy, and operational status in real-time', 'Ugate connects infrastructure data with other management systems for a more complete operational view', 'Uzero links energy data with emissions and carbon data', 'Dashboards help businesses track areas of high, abnormal, or inefficient consumption'] },
          { title: 'Metrics to Track', type: 'list', items: ['Total energy consumption', 'Energy consumption by area', 'Energy consumption relative to output', 'Abnormal consumption alerts', 'Energy costs', 'Related emissions data'] },
          { title: 'Expected Value', type: 'text', content: 'Businesses can monitor resource consumption more clearly, identify inefficient operational areas, and build a data foundation for energy-saving goals.' },
          { title: 'Suggested Roadmap', type: 'list', items: ['Survey existing energy and resource measurement points', 'Identify priority data groups based on cost or operational impact', 'Connect data into a centralized monitoring system', 'Set up dashboards, alerts, and consumption metrics', 'Link energy data with emissions data when ESG management is needed'] }
        ]
      }`;

const enDetails5 = `      enDetails: {
        ctaText: 'Discuss ESG and carbon',
        sections: [
          { title: 'Context', type: 'text', content: 'Suitable for export businesses, manufacturing plants, supply chains, or organizations needing to standardize emissions data. This scenario is crucial when preparing data for ESG, audits, or transparency requirements from clients and partners.' },
          { title: 'The Challenge', type: 'text', content: 'Emissions data often resides in energy bills, production reports, transport logs, raw material data, branches, and internal files. Unstandardized data makes it hard to aggregate, verify, and build consistent sustainability reports.' },
          { title: 'Data to Connect', type: 'list', items: ['Energy data', 'Fuel data', 'Production data', 'Transportation data', 'Raw materials data', 'Branch and factory data', 'Internal files and report templates', 'Data from related operational systems'] },
          { title: 'How Udata Helps', type: 'list', items: ['Uzero assists in collecting, categorizing, calculating, and tracking emissions data', 'Uzero helps manage carbon data by unit, branch, activity, or emission source', 'Ugate connects related operational data to analyze the relationship between performance, energy, costs, and emissions', 'Uboard supplements field operations and energy data if real-time tracking is needed'] },
          { title: 'Metrics to Track', type: 'list', items: ['Total emissions by period', 'Emissions by branch or unit', 'Emissions by source', 'Related energy data', 'ESG data completeness level', 'Readiness status for ESG reporting', 'Data for audits and supply chain compliance'] },
          { title: 'Expected Value', type: 'text', content: 'Businesses gain a clearer data foundation for ESG, carbon tracking, sustainability reporting, and audit requirements in the supply chain.' },
          { title: 'Suggested Roadmap', type: 'list', items: ['Survey emissions data sources and existing report templates', 'Define the scope of data to manage by unit, branch, or activity', 'Standardize energy, fuel, production, and transportation data', 'Set up carbon dashboards and ESG data reports', 'Evaluate data completeness and expand scope according to the sustainability roadmap'] }
        ]
      }`;

const enDetails6 = `      enDetails: {
        ctaText: 'Discuss operational management',
        sections: [
          { title: 'Context', type: 'text', content: 'Suitable for enterprise businesses, corporations, factory chains, or organizations with multiple departments and data systems. As operational data grows complex, leadership needs a unified information layer to track performance, costs, and bottlenecks.' },
          { title: 'The Challenge', type: 'text', content: 'Data is often scattered across ERP, production, logistics, finance, energy, emissions, and internal documents. Without synchronized data, leadership lacks a holistic view, and decision-making relies heavily on delayed reports.' },
          { title: 'Data to Connect', type: 'list', items: ['ERP data', 'Production data', 'Logistics data', 'Financial data', 'Energy data', 'Branch data', 'Emissions data', 'Internal documents and knowledge data'] },
          { title: 'How Udata Helps', type: 'list', items: ['Ugate acts as the central AI layer connecting and analyzing enterprise operational data', 'Ugate transforms fragmented data into meaningful insights for leadership', 'Uboard adds real-time factory, equipment, and field operations data', 'Uzero adds carbon, energy, and emissions data', 'MiniUgate supports mining internal knowledge and automating information responses'] },
          { title: 'Metrics to Track', type: 'list', items: ['Overall operational performance', 'Operational costs', 'Related cash flow data', 'Inventory and fulfillment capacity', 'Energy consumption levels', 'Carbon and emissions data', 'Report aggregation time', 'Internal information retrieval speed'] },
          { title: 'Expected Value', type: 'text', content: 'Leadership can observe the entire operational flow more clearly, detect bottlenecks earlier, and make decisions based on meaningful, synchronized data.' },
          { title: 'Suggested Roadmap', type: 'list', items: ['Survey data systems operating within each department', 'Identify critical management metrics for leadership', 'Connect data from priority systems into a centralized analytics layer', 'Set up executive dashboards and data access control models', 'Evaluate effectiveness and expand to other branches or operational areas'] }
        ]
      }`;

const enDetails7 = `      enDetails: {
        ctaText: 'Discuss AI knowledge',
        sections: [
          { title: 'Context', type: 'text', content: 'Suitable for businesses with extensive internal documents, operational procedures, product info, customer data, or support channels that need faster exploitation. Crucial for sales, customer care, technical, and internal operations teams.' },
          { title: 'The Challenge', type: 'text', content: 'Technical documents, troubleshooting procedures, product info, consultation history, and customer data are often scattered. Staff waste time searching or handling repetitive questions, leading to inconsistent response quality.' },
          { title: 'Data to Connect', type: 'list', items: ['Technical documents', 'Troubleshooting procedures', 'Frequently Asked Questions (FAQs)', 'Product information', 'Customer data', 'Consultation or support history', 'Internal documents and knowledge bases'] },
          { title: 'How Udata Helps', type: 'list', items: ['MiniUgate supports automated responses, knowledge queries, and customer interaction using AI', 'MiniUgate helps sales, customer care, or internal teams mine information faster', 'Ugate connects internal data sources to organize and retrieve information more efficiently', 'Data from websites, documents, internal files, and systems can be standardized into a shared knowledge base'] },
          { title: 'Metrics to Track', type: 'list', items: ['Information search time', 'Customer response time', 'Percentage of repetitive questions automated', 'Consistency level in responses', 'Internal request processing time', 'Internal knowledge reusability'] },
          { title: 'Expected Value', type: 'text', content: 'Businesses shorten information search times, reduce the burden of repetitive tasks, and improve response quality across teams or with customers.' },
          { title: 'Suggested Roadmap', type: 'list', items: ['Survey existing document sources, FAQs, and customer data', 'Standardize input data into an exploitable knowledge base', 'Set up AI assistants tailored to roles like sales, customer care, or technical support', 'Test response quality and adjust answering context', 'Expand to multiple communication channels or other internal user groups'] }
        ]
      }`;

const enArr = [enDetails1, enDetails2, enDetails3, enDetails4, enDetails5, enDetails6, enDetails7];

let updatedContent = content;

const regex = /viDetails: \{[\s\S]*?\]\s*\}\s*\}/g;
let matchCount = 0;
updatedContent = updatedContent.replace(regex, (match) => {
  const replacement = match + ",\n" + enArr[matchCount];
  console.log("Replaced case " + (matchCount + 1));
  matchCount++;
  return replacement;
});

console.log("Total matched:", matchCount);
fs.writeFileSync('c:/Users/PC/Downloads/fe mkt2/udata_next/components/UseCaseGrid.jsx', updatedContent, 'utf-8');
console.log("Done");
