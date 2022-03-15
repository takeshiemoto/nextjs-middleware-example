import { NextResponse } from 'next/server';

const isMaintenance = false;

export async function withMaintenanceMode() {
  console.log('[withMaintenanceMode]');
  if (isMaintenance) {
    return NextResponse.rewrite('/maintenance');
  }

  return;
}
