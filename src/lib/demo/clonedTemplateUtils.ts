/**
 * Utility helper for cloned templates to merge default mock data
 * with incoming dynamic data (from database leads / mock leads).
 */
export function adaptClonedTemplateData<T extends Record<string, any>>(
  defaultData: T,
  incomingData?: any
): T {
  if (!incomingData) {
    return defaultData;
  }

  return {
    ...defaultData,
    ...incomingData,
    business: {
      ...(defaultData as any)?.business,
      ...incomingData?.business
    }
  };
}
