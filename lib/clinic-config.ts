export const clinic = {
  nameJa: "青空眼科クリニック",
  nameEn: "AOZORA EYE CLINIC",
  phone: "03-1234-5678",
  phoneInternational: "+81-3-1234-5678",
  email: "info@aozora-eyeclinic.example.com",
  address: {
    postal: "〒150-0001",
    line1: "東京都渋谷区青空1-2-3",
    building: "青空ビル2F",
  },
  hours: {
    mon: { am: "9:00-12:30", pm: "15:00-18:00" },
    tue: { am: "9:00-12:30", pm: "15:00-18:00" },
    wed: { am: "9:00-12:30", pm: "15:00-18:00" },
    thu: { am: "9:00-13:00", pm: null },
    fri: { am: "9:00-12:30", pm: "15:00-18:00" },
    sat: { am: "9:00-12:30", pm: "14:00-17:00" },
    sun: { am: null, pm: null },
    holidayNote: "日・祝 休診",
  },
  parking: "専用駐車場 8台（無料）",
  stations: ["JR渋谷駅 東口 徒歩5分", "東急東横線 渋谷駅 徒歩6分"],
  reservation: {
    webPath: "/contact",
    telHours: "平日 9:00-17:30 / 土 9:00-16:30"
  },
  geo: {
    latitude: 35.6584,
    longitude: 139.7016,
  },
  url: process.env.NEXT_PUBLIC_SITE_URL || 'https://aozora-eyeclinic.example.com',
  description: '地域の皆様の目の健康を守る眼科クリニックです。最新の医療機器と丁寧な診療で、近視・遠視・乱視からドライアイ、白内障まで幅広く対応しています。',
} as const;

// ヘルパー関数
export function getFormattedPhone() {
  return clinic.phone.replace(/-/g, "");
}

export function getTelLink() {
  return `tel:${getFormattedPhone()}`;
}

export function getFullAddress() {
  return `${clinic.address.postal} ${clinic.address.line1} ${clinic.address.building}`;
}

export function getFullAddressWithoutPostal() {
  return `${clinic.address.line1} ${clinic.address.building}`;
}

export function getBusinessHoursText() {
  return `${clinic.hours.mon.am} / ${clinic.hours.mon.pm}（月火水金）、${clinic.hours.thu.am}（木）、${clinic.hours.sat.am} / ${clinic.hours.sat.pm}（土）、${clinic.hours.holidayNote}`;
}

// 今日の診療状況取得
export function getTodayStatus() {
  const today = new Date();
  const dayOfWeek = today.getDay(); // 0: Sun, 1: Mon, ..., 6: Sat
  const currentHour = today.getHours();
  const currentMinute = today.getMinutes();
  const currentTime = currentHour * 60 + currentMinute;

  const dayKeys = ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat'] as const;
  const todayKey = dayKeys[dayOfWeek];
  const todayHours = clinic.hours[todayKey];

  if (!todayHours.am && !todayHours.pm) {
    return { status: 'closed', message: '本日は休診日です' };
  }

  // 午前診療チェック
  if (todayHours.am) {
    const [amStart, amEnd] = todayHours.am.split('-').map(time => {
      const [h, m] = time.split(':').map(Number);
      return h * 60 + m;
    });
    if (currentTime >= amStart && currentTime <= amEnd) {
      return { status: 'open', message: `午前診療中（${todayHours.am}）` };
    }
  }

  // 午後診療チェック
  if (todayHours.pm) {
    const [pmStart, pmEnd] = todayHours.pm.split('-').map(time => {
      const [h, m] = time.split(':').map(Number);
      return h * 60 + m;
    });
    if (currentTime >= pmStart && currentTime <= pmEnd) {
      return { status: 'open', message: `午後診療中（${todayHours.pm}）` };
    }
  }

  return { status: 'closed', message: '診療時間外です' };
}