const DATA = {
  categories: {"Other":4191,"Vehicle Breakdown":1912,"Traffic Congestion":802,"Road Work":531,"Water Logging":247,"Tree Fall":123,"Accident":94,"Road Condition":87,"Potholes":72,"Unknown":65,"Weather Related":31,"VIP Movement":18},
  impacts: {"High":951,"Medium":4662,"Low":2560},
  hours: {"0":421,"1":384,"2":395,"3":374,"4":560,"5":661,"6":662,"7":482,"8":330,"9":161,"10":68,"11":69,"12":86,"13":33,"14":15,"15":9,"16":9,"17":41,"18":234,"19":584,"20":685,"21":817,"22":589,"23":504},
  weekdays: {"0":920,"1":1252,"2":1174,"3":1359,"4":1258,"5":1243,"6":967},
  causes: {"vehicle_breakdown":4896,"others":638,"pot_holes":537,"construction":480,"water_logging":458,"accident":365,"tree_fall":284,"road_conditions":170,"congestion":136,"public_event":84},
  junctions: {"MekhriCircle":64,"AyyappaTempleJunc":49,"SatteliteBusStandJunc":43,"YeshwanthpuraCircle":38,"YelhankaCircle":34,"SilkBoardJunc":33,"toll gate mysore road":33,"JalahalliCross(SM Circle)":32,"Nagavara-ORR Junction":32,"K R Circle":31},
  stackedByCategory: {
    "Accident": {"High":70,"Medium":20,"Low":4},
    "Traffic Congestion": {"High":200,"Medium":500,"Low":102},
    "VIP Movement": {"High":15,"Medium":3,"Low":0},
    "Road Work": {"High":100,"Medium":350,"Low":81},
    "Water Logging": {"High":80,"Medium":130,"Low":37},
    "Vehicle Breakdown": {"High":300,"Medium":1100,"Low":512},
    "Tree Fall": {"High":40,"Medium":60,"Low":23}
  }
};

const COLORS = {
  accent: 'rgba(99,102,241,0.8)', cyan: 'rgba(6,182,212,0.8)',
  red: 'rgba(255,59,59,0.8)', amber: 'rgba(245,158,11,0.8)',
  green: 'rgba(34,197,94,0.8)', blue: 'rgba(59,130,246,0.8)'
};

function chartDefaults() {
  return {
    responsive: true, maintainAspectRatio: true,
    plugins: { legend: { labels: { color: '#94a3b8', font: { family: 'Space Grotesk', size: 12 } } } },
    scales: { x: { ticks: { color: '#64748b' }, grid: { color: 'rgba(30,45,69,0.8)' } }, y: { ticks: { color: '#64748b' }, grid: { color: 'rgba(30,45,69,0.8)' } } }
  };
}

window.addEventListener('load', () => {
  new Chart(document.getElementById('categoryChart'), {
    type: 'doughnut',
    data: {
      labels: Object.keys(DATA.categories),
      datasets: [{ data: Object.values(DATA.categories),
        backgroundColor: ['#6366f1','#f59e0b','#06b6d4','#3b82f6','#8b5cf6','#22c55e','#ff3b3b','#ec4899','#f97316','#94a3b8','#14b8a6','#a855f7'],
        borderWidth: 0 }]
    },
    options: { responsive:true, maintainAspectRatio:true,
      plugins: { legend: { position:'right', labels: { color:'#94a3b8', font:{family:'Space Grotesk',size:11}, boxWidth:12, padding:10 } } }
    }
  });

  new Chart(document.getElementById('impactChart'), {
    type: 'doughnut',
    data: {
      labels: ['High Impact','Medium Impact','Low Impact'],
      datasets: [{ data: [951,4662,2560],
        backgroundColor: ['rgba(255,59,59,0.85)','rgba(245,158,11,0.85)','rgba(34,197,94,0.85)'],
        borderWidth: 0 }]
    },
    options: { responsive:true, maintainAspectRatio:true,
      plugins: { legend: { position:'bottom', labels: { color:'#94a3b8', font:{family:'Space Grotesk',size:12} } } }
    }
  });

  new Chart(document.getElementById('hourChart'), {
    type: 'bar',
    data: {
      labels: Object.keys(DATA.hours).map(h => h+'h'),
      datasets: [{ label:'Events', data: Object.values(DATA.hours),
        backgroundColor: Object.keys(DATA.hours).map(h => {
          const hr = parseInt(h);
          return (hr>=7&&hr<10)||(hr>=17&&hr<20) ? 'rgba(255,59,59,0.7)' : hr>=20||hr<6 ? 'rgba(99,102,241,0.7)' : 'rgba(6,182,212,0.5)';
        }),
        borderWidth: 0, borderRadius: 3 }]
    },
    options: { ...chartDefaults(), plugins:{ legend:{display:false} } }
  });

  new Chart(document.getElementById('weekdayChart'), {
    type: 'bar',
    data: {
      labels: ['Mon','Tue','Wed','Thu','Fri','Sat','Sun'],
      datasets: [{ label:'Events', data: Object.values(DATA.weekdays),
        backgroundColor: ['rgba(6,182,212,0.7)','rgba(6,182,212,0.7)','rgba(255,59,59,0.7)','rgba(6,182,212,0.7)','rgba(6,182,212,0.7)','rgba(245,158,11,0.6)','rgba(245,158,11,0.6)'],
        borderWidth: 0, borderRadius: 3 }]
    },
    options: { ...chartDefaults(), plugins:{ legend:{display:false} } }
  });

  new Chart(document.getElementById('junctionChart'), {
    type: 'bar',
    data: {
      labels: Object.keys(DATA.junctions),
      datasets: [{ label:'Events', data: Object.values(DATA.junctions),
        backgroundColor: 'rgba(99,102,241,0.7)', borderWidth:0, borderRadius:3 }]
    },
    options: { ...chartDefaults(), indexAxis:'y', plugins:{legend:{display:false}} }
  });

  new Chart(document.getElementById('causeChart'), {
    type: 'bar',
    data: {
      labels: Object.keys(DATA.causes).map(c => c.replace('_',' ')),
      datasets: [{ data: Object.values(DATA.causes),
        backgroundColor: 'rgba(6,182,212,0.7)', borderWidth:0, borderRadius:3 }]
    },
    options: { ...chartDefaults(), indexAxis:'y', plugins:{legend:{display:false}} }
  });

  new Chart(document.getElementById('weekendChart'), {
    type: 'pie',
    data: {
      labels: ['Weekday Events','Weekend Events'],
      datasets: [{ data: [5963, 2210],
        backgroundColor: ['rgba(99,102,241,0.8)','rgba(245,158,11,0.8)'],
        borderWidth:0 }]
    },
    options: { responsive:true, plugins:{ legend:{ position:'bottom', labels:{color:'#94a3b8',font:{family:'Space Grotesk'}} } } }
  });

  const cats = Object.keys(DATA.stackedByCategory);
  new Chart(document.getElementById('stackedChart'), {
    type: 'bar',
    data: {
      labels: cats,
      datasets: [
        { label:'High', data: cats.map(c=>DATA.stackedByCategory[c].High), backgroundColor:'rgba(255,59,59,0.8)', borderWidth:0 },
        { label:'Medium', data: cats.map(c=>DATA.stackedByCategory[c].Medium), backgroundColor:'rgba(245,158,11,0.7)', borderWidth:0 },
        { label:'Low', data: cats.map(c=>DATA.stackedByCategory[c].Low), backgroundColor:'rgba(34,197,94,0.6)', borderWidth:0 }
      ]
    },
    options: { ...chartDefaults(), scales:{ x:{stacked:true,ticks:{color:'#64748b'},grid:{color:'rgba(30,45,69,0.8)'}}, y:{stacked:true,ticks:{color:'#64748b'},grid:{color:'rgba(30,45,69,0.8)'}} } }
  });

  const events = [
    {cat:'Accident',cause:'Collision',loc:'Silk Board Junction',impact:'High',hour:8},
    {cat:'Water Logging',cause:'water_logging',loc:'K R Circle',impact:'Medium',hour:6},
    {cat:'Vehicle Breakdown',cause:'vehicle_breakdown',loc:'Mekhri Circle',impact:'Medium',hour:21},
    {cat:'Road Work',cause:'construction',loc:'Hebbal Flyover',impact:'Low',hour:10},
    {cat:'VIP Movement',cause:'vip_movement',loc:'MG Road',impact:'High',hour:14},
    {cat:'Traffic Congestion',cause:'congestion',loc:'Marathahalli Bridge',impact:'High',hour:18},
    {cat:'Tree Fall',cause:'tree_fall',loc:'Indiranagar 100ft Rd',impact:'Low',hour:5},
    {cat:'Vehicle Breakdown',cause:'vehicle_breakdown',loc:'ORR East, Bellandur',impact:'Medium',hour:22},
  ];
  const colorMap = {High:'red',Medium:'amber',Low:'green'};
  const log = document.getElementById('eventLog');
  events.forEach(e => {
    const div = document.createElement('div'); div.className='event-row';
    div.innerHTML = `<div class="event-dot ${colorMap[e.impact]}"></div>
      <div>
        <div class="event-category">${e.cat} — ${e.loc}</div>
        <div class="event-meta">Cause: ${e.cause.replace(/_/g,' ')} · Hour: ${e.hour}:00 · Impact: <span style="color:var(--${colorMap[e.impact]})">${e.impact}</span></div>
      </div>`;
    log.appendChild(div);
  });

  const jData = [
    ['MekhriCircle',64,'Vehicle Breakdown','High','2 Officers permanent + 1 extra peak hours'],
    ['AyyappaTempleJunc',49,'Traffic Congestion','Medium','1 Officer + monitoring'],
    ['SatteliteBusStandJunc',43,'Vehicle Breakdown','Medium','1 Officer on call'],
    ['YeshwanthpuraCircle',38,'Road Work','High','2 Officers + barricade team'],
    ['YelhankaCircle',34,'Traffic Congestion','Medium','1 Officer + signals review'],
    ['SilkBoardJunc',33,'Accident','High','3 Officers + first aid ready'],
    ['toll gate mysore road',33,'Vehicle Breakdown','Medium','2 Officers'],
    ['JalahalliCross(SM Circle)',32,'Traffic Congestion','High','2 Officers + peak diversion plan'],
    ['Nagavara-ORR Junction',32,'Road Work','Medium','1 Officer + construction liaison'],
    ['K R Circle',31,'Water Logging','High','2 Officers + drainage alert protocol'],
  ];
  const tbody = document.getElementById('junctionTable');
  jData.forEach(([junc,count,topCat,impact,deploy],i) => {
    const tr = document.createElement('tr');
    const bc = colorMap[impact];
    tr.innerHTML = `<td style="color:var(--muted)">${i+1}</td>
      <td style="font-weight:600">${junc}</td>
      <td style="font-family:'JetBrains Mono',monospace">${count}</td>
      <td>${topCat}</td>
      <td><span class="badge ${bc}">${impact}</span></td>
      <td style="font-size:12px;color:var(--muted)">${deploy}</td>`;
    tbody.appendChild(tr);
  });
});

const RECS = {
  High: { officers:8, wardens:4, barricades:6, barricadeType:'Heavy Metal Barricades', diversionRoutes:2, alert:'RED 🔴', alertEmoji:'🚨', responseTime:10 },
  Medium: { officers:4, wardens:2, barricades:3, barricadeType:'Cone Barricades + 1 Metal', diversionRoutes:1, alert:'AMBER 🟡', alertEmoji:'⚠️', responseTime:20 },
  Low: { officers:1, wardens:1, barricades:1, barricadeType:'Cone Barricades', diversionRoutes:0, alert:'GREEN 🟢', alertEmoji:'✅', responseTime:30 }
};
const CATEGORY_NOTES = {
  'Accident': 'Coordinate with ambulance (108) + fire brigade (101). Request medical teams if injuries reported.',
  'Traffic Congestion': 'Deploy upstream intersection officers to prevent queue spillover.',
  'VIP Movement': 'Coordinate with security detail. Pre-clear designated route 30 mins in advance.',
  'Road Work': 'Liaise with PWD/BBMP contractor for closure timeline. Request work completion ETA.',
  'Water Logging': 'Alert drainage dept. Request mobile pump deployment. Monitor road safety.',
  'Tree Fall': 'Contact BBMP horticulture dept for emergency clearance. ETA typically 2-4 hours.',
  'VIP Movement': 'Advance party coordination required. Stand down all non-essential traffic on route.',
};
const PEAK_HOURS = [[7,10],[17,20],[20,24]];

function isPeak(h) { return PEAK_HOURS.some(([s,e]) => h>=s && h<e); }

function computeImpactLevel(category, cause, priority, vehicleRelated, isRoute, hour) {
  const sevMap = { 'Accident':9,'Traffic Congestion':8,'VIP Movement':7,'Road Work':6,'Water Logging':6,'Road Condition':5,'Tree Fall':5,'Vehicle Breakdown':4,'Potholes':4,'Weather Related':6,'Unknown':3,'Other':2 };
  const base = sevMap[category] || 3;
  let score = base * 0.5 + (priority==='High'?3:0) + (vehicleRelated*1.5) + (isRoute*1) + (isPeak(hour)?1.5:0);
  if(score > 6.5) return 'High';
  if(score > 3.5) return 'Medium';
  return 'Low';
}

let scoreChartInstance = null;

function runPrediction() {
  const category = document.getElementById('p_category').value;
  const cause = document.getElementById('p_cause').value;
  const hour = parseInt(document.getElementById('p_hour').value);
  const weekday = parseInt(document.getElementById('p_weekday').value);
  const vehicle = parseInt(document.getElementById('p_vehicle').value);
  const priority = document.getElementById('p_priority').value;
  const route = parseInt(document.getElementById('p_route').value);
  const period = hour>=7&&hour<10 ? 'Morning Peak' : hour>=17&&hour<20 ? 'Evening Peak' : hour>=20 ? 'Night' : 'Off-Peak';

  const level = computeImpactLevel(category, cause, priority, vehicle, route, hour);
  const rec = RECS[level];

  const peakMult = isPeak(hour) ? 1.5 : 1;
  const officers = Math.ceil(rec.officers * peakMult);

  document.getElementById('resultPanel').classList.remove('result-hidden');

  const banner = document.getElementById('alertBanner');
  const cls = {High:'red',Medium:'amber',Low:'green'}[level];
  banner.className = `alert-banner ${cls}`;
  banner.innerHTML = `
    <div class="alert-icon">${rec.alertEmoji}</div>
    <div class="alert-text">
      <h2>ALERT LEVEL: ${rec.alert}</h2>
      <p>${category} · ${period} · ${['Mon','Tue','Wed','Thu','Fri','Sat','Sun'][weekday]} · Respond within ${rec.responseTime} minutes</p>
    </div>`;

  document.getElementById('r_officers').textContent = officers;
  document.getElementById('r_officers_desc').textContent = `${rec.wardens} wardens + ${officers} traffic officers`;
  document.getElementById('r_barricades').textContent = rec.barricades;
  document.getElementById('r_barricades_desc').textContent = rec.barricadeType;
  document.getElementById('r_response').textContent = rec.responseTime + 'm';

  const roadClosure = (document.getElementById('p_road_closure') || {value:'No'}).value === 'Yes';
  const baseRoutes = rec.diversionRoutes || 0;
  let routes = baseRoutes;
  if (roadClosure) routes += 1;
  if (route === 1) routes += 1;
  if (level === 'High' && isPeak(hour)) routes += 1;
  routes = Math.min(Math.max(routes, 0), 4);
  const baseReduction = level === 'High' ? [25,35] : level === 'Medium' ? [12,25] : [5,12];
  const routeBoostLow = (routes - baseRoutes) * 4;
  const routeBoostHigh = (routes - baseRoutes) * 6;
  const closureBoostLow = roadClosure ? 3 : 0;
  const closureBoostHigh = roadClosure ? 5 : 0;
  let reductionLow = Math.max(1, Math.round(baseReduction[0] + routeBoostLow + closureBoostLow));
  let reductionHigh = Math.min(60, Math.round(baseReduction[1] + routeBoostHigh + closureBoostHigh));
  const reasonParts = [];
  reasonParts.push(`${level}-impact ${category.toLowerCase()} detected during ${period.toLowerCase()}`);
  if (vehicle) reasonParts.push('vehicle involved');
  if (roadClosure) reasonParts.push('road closure required');
  const reason = reasonParts.join('; ')+'.';
  const actions = [];
  if (level === 'High') {
    actions.push('Activate alternate corridor routes');
    actions.push('Deploy marshals at diversion entry points');
    actions.push('Coordinate with nearby police stations');
    actions.push('Deploy VMS & temporary signage at upstream approaches');
  } else if (level === 'Medium') {
    actions.push('Activate advisory diversion route');
    actions.push('Deploy VMS messaging and one marshal at key points');
  } else {
    actions.push('Monitor via CCTV and keep officer on standby');
  }
  if (roadClosure) actions.unshift('Implement full road closure and detour signage');
  if (route === 1) actions.push('Publish advisory across local channels and VMS');
  const navAdvisory = 'Suggested route updates for navigation systems and traffic operators.';
  const instrInterval = level === 'High' ? 10 : level === 'Medium' ? 15 : 30;
  const operatorInstructions = `Monitor congestion every ${instrInterval} minutes and adjust diversion flow as required. Send status updates to control room.`;
  const diversionHtml = `
    <div class="diversion-card">
      <div class="diversion-header"><div class="card-title">🗺 <span>Diversion Plan</span></div><div class="diversion-count">${routes} Route${routes!==1?'s':''}</div></div>
      <div class="diversion-row"><strong>Reason:</strong><div class="diversion-text">${reason}</div></div>
      <div class="diversion-row"><strong>Recommended Actions:</strong>
        <ul class="diversion-actions">
          ${actions.map(a => `<li>• ${a}</li>`).join('')}
        </ul>
      </div>
      <div class="diversion-row"><strong>Expected Congestion Reduction:</strong>
        <div class="diversion-percent">${reductionLow}–${reductionHigh}%</div>
      </div>
      <div class="diversion-row"><strong>Navigation Advisory:</strong><div class="diversion-text">${navAdvisory}</div></div>
      <div class="diversion-row"><strong>Traffic Operator Instructions:</strong><div class="diversion-text">${operatorInstructions}</div></div>
      <div style="margin-top:10px;color:var(--muted);font-size:12px;">Corridor: ${document.getElementById('p_corridor') ? document.getElementById('p_corridor').value : '—'} · Closure: ${roadClosure? 'Yes':'No'}</div>
    </div>`;
  document.getElementById('r_diversion').innerHTML = diversionHtml;

  const note = CATEGORY_NOTES[category] || 'Follow standard operating procedure. Update incident log after resolution.';
  document.getElementById('r_note').innerHTML = `<strong>🗒 Special Instructions:</strong> ${note}`;

  const scoreCanvas = document.getElementById('scoreChart');
  if(scoreChartInstance) scoreChartInstance.destroy();
  const sevMap = { 'Accident':9,'Traffic Congestion':8,'VIP Movement':7,'Road Work':6,'Water Logging':6,'Road Condition':5,'Tree Fall':5,'Vehicle Breakdown':4,'Potholes':4,'Weather Related':6,'Unknown':3,'Other':2 };
  const factors = [
    { label: 'Event Severity', value: (sevMap[category]||3)*0.5 },
    { label: 'Priority', value: priority==='High'?3:0 },
    { label: 'Vehicle Involved', value: vehicle*1.5 },
    { label: 'Route Event', value: route*1 },
    { label: 'Peak Hour Boost', value: isPeak(hour)?1.5:0 },
  ];
  scoreChartInstance = new Chart(scoreCanvas, {
    type: 'bar',
    data: {
      labels: factors.map(f=>f.label),
      datasets: [{ label:'Score Contribution', data: factors.map(f=>f.value),
        backgroundColor: ['rgba(99,102,241,0.8)','rgba(255,59,59,0.7)','rgba(6,182,212,0.7)','rgba(245,158,11,0.7)','rgba(34,197,94,0.7)'],
        borderWidth:0, borderRadius:4 }]
    },
    options: {
      responsive:true, maintainAspectRatio:true,
      plugins:{ legend:{display:false} },
      scales:{ x:{ticks:{color:'#64748b'},grid:{color:'rgba(30,45,69,0.8)'}}, y:{ticks:{color:'#64748b'},grid:{color:'rgba(30,45,69,0.8)'},max:5} }
    }
  });

  document.getElementById('resultPanel').scrollIntoView({behavior:'smooth'});
}

function showPage(id, el) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
  document.getElementById(id).classList.add('active');
  el.classList.add('active');
}
