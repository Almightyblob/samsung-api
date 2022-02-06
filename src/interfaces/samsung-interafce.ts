export interface samsungApiResponse {
  optionlist:OptionList,
  chipOption:ChipOption,
  awardList:AwardList,
  fmyChipList:FmyChipList,
  storePromotion:StorePromotion,
  monthlyPriceInfo:MonthlyPriceInfo,
  yopFlags:TopFlags,
  modelList:ModelList,
  productList:ProductList,
  resultData:ResultData,
  response:Response,
  rootObject:RootObject
}

export interface OptionList {
  optionCode: string;
  optionName: string;
  optionLocalName: string;
}

export interface ChipOption {
  fmyChipType: string;
  optionList: OptionList[];
}

export interface AwardList {
  awardTitle: string;
  awardImg: string;
  awardDesc: string;
  awardLink: string;
  overlayYN: string;
}

export interface FmyChipList {
  fmyChipType: string;
  fmyChipCode: string;
  fmyChipName: string;
  fmyChipLocalName: string;
}

export interface StorePromotion {
  promotionImgType: string;
  promotionText: string;
  promotionFormattedText?: any;
}

export interface MonthlyPriceInfo {
  leasingUpfront: string;
  leasingMonthly: string;
  leasingMonths: string;
  interest: string;
}

export interface TopFlags {
  iconTypeCd: string;
  iconTitle: string;
}

export interface ModelList {
  modelCode: string;
  shopSKU: string;
  modelName: string;
  displayName: string;
  marketingpdpYN: string;
  thumbUrl: string;
  thumbUrlAlt: string;
  galleryImage: string[];
  galleryImageAlt: string[];
  pdpUrl: string;
  originPdpUrl: string;
  configuratorUrl: string;
  ratings: string;
  reviewCount: string;
  reviewUrl: string;
  energyLabelGrade: string;
  newEnergyLabel: string;
  energyLabelClass1: string;
  energyLabelClass2?: any;
  energyFileUrl: string;
  ficheFileUrl: string;
  selected: string;
  fmyChipList: FmyChipList[];
  ctaType: string;
  offerCtaFlag: string;
  tariffYN: string;
  wtbUseFlag: string;
  repairabilityIndex?: any;
  repairabilityIndexPdfUrl?: any;
  stockStatusText: string;
  financeInfoAmount?: any;
  financeInfoValue?: any;
  tradeIn: string;
  tradeInDesc?: any;
  tradeInFormattedDesc?: any;
  premiumCare: string;
  premiumCareDesc?: any;
  premiumCareFormattedDesc?: any;
  financing: string;
  financingDesc?: any;
  financingFormattedDesc?: any;
  upgrade: string;
  upgradeDesc?: any;
  upgradeFormattedDesc?: any;
  storePromotions: StorePromotion[];
  usp: string[];
  leasingInfo?: any;
  price: string;
  priceDisplay: string;
  promotionPrice: string;
  promotionPriceDisplay: string;
  tradeInPriceText?: any;
  listPrice?: any;
  listPriceDisplay?: any;
  saveText: string;
  pricePeriodInfo?: any;
  buyBackDesc?: any;
  tradeInDiscount?: any;
  tradeInPrice?: any;
  msrpPrice: string;
  monthlyPriceInfo: MonthlyPriceInfo;
  topFlags: TopFlags;
  keySummary?: any;
  emiCalculatorUrl?: any;
  pviTypeName: string;
  pviSubtypeName: string;
  deliveryYN: string;
  buyingConfigLinkType?: any;
  buyingConfigLink?: any;
  bespokeCtaUse: string;
  bespokeCtaLink?: any;
  ctaLocalText: string;
  ctaEngText: string;
  configuratorUseYn: string;
  pf360IconUse: string;
  uspText?: any;
  keySpec?: any;
}

export interface ProductList {
  familyRecord: string;
  familyId: string;
  modelCount: string;
  fmyMarketingName: string;
  fmyEngName: string;
  categorySubTypeCode: string;
  categorySubTypeEngName: string;
  simplePdYN: string;
  oldProductYN: string;
  productGroupId: string;
  optionPriceUse?: any;
  iaCtaDisplay: string;
  wtbOnlineDispFuncUseYN?: any;
  filterParamText?: any;
  thirdPASeller?: any;
  chipOptions: ChipOption[];
  awardList: AwardList[];
  quickLooks: any[];
  modelList: ModelList[];
}

export interface ResultData {
  productList: ProductList[];
}

export interface Response {
  statusCode: number;
  statusMessage: string;
  siteCode: string;
  resultData: ResultData;
}

export interface RootObject {
  response: Response;
}
