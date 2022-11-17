import { FooterModel } from "../../domain/models/FooterModel";
import { footerData } from "../../fakeData/footer";
import { useFooterStore } from "../../stores/FooterStore";

export function getFooter() {
  const models = new Array();
  footerData.map((item) => {
    models.push(
      new FooterModel(item.id, item.imageUrl, item.description, item.postUrl)
    );
  });

  useFooterStore.setState({ footerData: models });
}
