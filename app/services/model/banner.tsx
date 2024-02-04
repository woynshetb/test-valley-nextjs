interface BannerModel {
  mainBannerId: number;
  title: string;
  sort: number;
  pcImageUrl: string;
  mobileImageUrl: string;
  linkUrl: string;
  startDate: string;
  endDate: string;
  creator: string;
  updater: string;
  deleter: null | any;
  createdAt: string;
  updatedAt: string;
  deletedAt: null | any;
}

export default BannerModel;