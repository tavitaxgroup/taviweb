/**
 * Vulcan Precision Industrial - Core Engineering & Commercial Logic
 */

export interface LaserCuttingParams {
  material: 'carbon_steel' | 'stainless_steel' | 'aluminum';
  thicknessMm: number;
  powerKw: number;
}

export interface LaserCuttingEstimate {
  feedrateMPerMin: number;
  assistGas: 'O2' | 'N2' | 'Air';
  gasPressureBar: number;
  pierceTimeSec: number;
  edgeQualityRaUm: number;
}

export function calculateLaserCuttingParams(params: LaserCuttingParams): LaserCuttingEstimate {
  const { material, thicknessMm, powerKw } = params;
  const safeThickness = Math.max(0.5, Math.min(50, thicknessMm));
  const safePower = Math.max(3, Math.min(40, powerKw));

  let baseSpeedFactor = 1.0;
  let assistGas: 'O2' | 'N2' | 'Air' = 'O2';
  let gasPressureBar = 0.8;
  let edgeQualityRaUm = 1.6;

  switch (material) {
    case 'carbon_steel':
      assistGas = safeThickness <= 3 ? 'Air' : 'O2';
      gasPressureBar = safeThickness <= 3 ? 12 : 0.7;
      baseSpeedFactor = 28;
      edgeQualityRaUm = 3.2;
      break;
    case 'stainless_steel':
      assistGas = 'N2';
      gasPressureBar = Math.min(22, 10 + safeThickness * 0.8);
      baseSpeedFactor = 24;
      edgeQualityRaUm = 1.2;
      break;
    case 'aluminum':
      assistGas = 'N2';
      gasPressureBar = Math.min(20, 12 + safeThickness * 0.6);
      baseSpeedFactor = 20;
      edgeQualityRaUm = 2.0;
      break;
  }

  // Feedrate formula: inversely proportional to thickness, scaled by power
  const feedrateMPerMin = Number(
    Math.max(0.2, (baseSpeedFactor * (safePower / 12) / Math.pow(safeThickness, 0.85))).toFixed(2)
  );

  const pierceTimeSec = Number(
    Math.max(0.05, (safeThickness * 0.12 * (15 / safePower))).toFixed(2)
  );

  return {
    feedrateMPerMin,
    assistGas,
    gasPressureBar: Number(gasPressureBar.toFixed(1)),
    pierceTimeSec,
    edgeQualityRaUm,
  };
}

export interface DealerPricingParams {
  retailPriceUsd: number;
  tier: 'tier1_exclusive' | 'tier2_authorized' | 'standard';
  annualVolumeUnits: number;
}

export interface DealerPricingResult {
  wholesalePriceUsd: number;
  discountPercent: number;
  quarterlyRebateUsd: number;
  annualProjectedGrossProfitUsd: number;
}

export function calculateDealerPricing(params: DealerPricingParams): DealerPricingResult {
  const { retailPriceUsd, tier, annualVolumeUnits } = params;
  let baseDiscount = 12; // 12%

  if (tier === 'tier2_authorized') {
    baseDiscount = 18;
  } else if (tier === 'tier1_exclusive') {
    baseDiscount = 25;
  }

  // Volume bonus: +1% per 2 units up to +5%
  const volumeBonus = Math.min(5, Math.floor(Math.max(0, annualVolumeUnits) / 2));
  const finalDiscountPercent = baseDiscount + volumeBonus;

  const wholesalePriceUsd = Math.round(retailPriceUsd * (1 - finalDiscountPercent / 100));
  const unitProfitUsd = retailPriceUsd - wholesalePriceUsd;

  // Rebate if hitting targets
  const quarterlyTargetUnits = Math.ceil(annualVolumeUnits / 4);
  const rebatePerUnit = tier === 'tier1_exclusive' ? retailPriceUsd * 0.03 : retailPriceUsd * 0.015;
  const quarterlyRebateUsd = Math.round(quarterlyTargetUnits * rebatePerUnit);

  const annualProjectedGrossProfitUsd = Math.round(unitProfitUsd * annualVolumeUnits + (quarterlyRebateUsd * 4));

  return {
    wholesalePriceUsd,
    discountPercent: finalDiscountPercent,
    quarterlyRebateUsd,
    annualProjectedGrossProfitUsd,
  };
}

export function formatMetricTolerance(valMm: number): string {
  if (Math.abs(valMm) < 0.001) {
    return `±${(valMm * 1000).toFixed(1)} µm`;
  }
  return `±${valMm.toFixed(4).replace(/0+$/, '').replace(/\.$/, '')} mm`;
}

export function generateRfqCode(categoryPrefix: string = 'VUL'): string {
  const cleanPrefix = categoryPrefix.toUpperCase().replace(/[^A-Z0-9]/g, '').slice(0, 4) || 'VUL';
  const year = 2025;
  const randNum = Math.floor(1000 + Math.random() * 9000);
  return `RFQ-${year}-${cleanPrefix}-${randNum}`;
}

export interface RoiParams {
  machineCostUsd: number;
  monthlyProductionHours: number;
  hourlyOperatorLaborUsd: number;
  outputIncreasePercent: number;
}

export function calculateEquipmentRoi(params: RoiParams) {
  const { machineCostUsd, monthlyProductionHours, hourlyOperatorLaborUsd, outputIncreasePercent } = params;
  const safeHours = Math.max(80, monthlyProductionHours);
  const monthlyLaborCost = safeHours * hourlyOperatorLaborUsd;
  
  // Output increase translates to additional productive value
  const monthlyEfficiencyGainUsd = monthlyLaborCost * (outputIncreasePercent / 100) + (safeHours * 22);
  const paybackMonths = Number((machineCostUsd / Math.max(100, monthlyEfficiencyGainUsd)).toFixed(1));
  const fiveYearNetSavingsUsd = Math.round((monthlyEfficiencyGainUsd * 60) - machineCostUsd);

  return {
    paybackMonths,
    monthlyEfficiencyGainUsd: Math.round(monthlyEfficiencyGainUsd),
    fiveYearNetSavingsUsd,
  };
}
