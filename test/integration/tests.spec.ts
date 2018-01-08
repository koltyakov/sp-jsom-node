import { expect } from 'chai';
import * as path from 'path';
import * as sprequest from 'sp-request';
import { Cpass } from 'cpass';

import { JsomNode, IJsomNodeInitSettings } from '../../src';
import { Environments as TestsConfigs } from '../configs';

const cpass = new Cpass();

const testVariables = {
  newListName: 'JsomNode Temporary List'
};

declare let global: any;

for (let testConfig of TestsConfigs) {

  describe(`Run tests in ${testConfig.environmentName}`, () => {

    let request: sprequest.ISPRequest;
    let config: any;
    let _spPageContextInfo: any;

    before('Configure JsomNode', function (done: any): void {
      this.timeout(30 * 1000);

      config = require(path.resolve(testConfig.configPath));
      config.password = config.password && cpass.decode(config.password);

      let jsomNodeSettings: IJsomNodeInitSettings = {
        siteUrl: config.siteUrl,
        authOptions: config
      };

      (new JsomNode(jsomNodeSettings)).init();

      request = sprequest.create(config);

      _spPageContextInfo = global.window._spPageContextInfo;

      done();
    });

    it(`should get web's title`, function (done: MochaDone): void {
      this.timeout(30 * 1000);

      const _getWeb = (): Promise<any> => {
        return new Promise((resolve, reject) => {
          // const ctx = SP.ClientContext.get_current();
          const ctx = new SP.ClientContext(_spPageContextInfo.webServerRelativeUrl);
          const oWeb = ctx.get_web();
          ctx.load(oWeb);
          ctx.executeQueryAsync(() => {
            resolve(oWeb.get_title());
          }, (sender, args) => {
            reject(args.get_message());
          });
        });
      };

      request.get(`${config.siteUrl}/_api/web?$select=Title`)
        .then(response => {
          return Promise.all([
            _getWeb(),
            response.body.d.Title
          ]);
        })
        .then(response => {
          expect(response[0]).to.equal(response[1]);
          done();
        })
        .catch(done);
    });

    it(`should get lists on web`, function (done: MochaDone): void {
      this.timeout(30 * 1000);

      const _getLists = (): Promise<any> => {
        return new Promise((resolve, reject) => {
          // const ctx = SP.ClientContext.get_current();
          const ctx = new SP.ClientContext(_spPageContextInfo.webServerRelativeUrl);
          const oWeb = ctx.get_web();
          const oLists = oWeb.get_lists();
          ctx.load(oLists);
          ctx.executeQueryAsync(() => {
            resolve(oLists.get_data());
          }, (sender, args) => {
            reject(args.get_message());
          });
        });
      };

      request.get(`${config.siteUrl}/_api/web/lists?$select=Title`)
        .then(response => {
          return Promise.all([
            _getLists(),
            response.body.d.results
          ]);
        })
        .then(response => {
          expect(response[0].length).to.equal(response[1].length);
          done();
        })
        .catch(done);
    });

    it('should create a new list', function (done: MochaDone): void {
      this.timeout(30 * 1000);

      const _createList = (title: string, description: string = '', listTemplateId: number = 100): Promise<any> => {
        return new Promise((resolve, reject) => {
          // const ctx = SP.ClientContext.get_current();
          const ctx = new SP.ClientContext(_spPageContextInfo.webServerRelativeUrl);
          const oWeb = ctx.get_web();
          const oLists = oWeb.get_lists();
          const listCreationInfo = new SP.ListCreationInformation();
          listCreationInfo.set_title(title);
          listCreationInfo.set_description(description);
          listCreationInfo.set_templateType(listTemplateId);
          const oList = oLists.add(listCreationInfo);
          ctx.load(oList);
          ctx.executeQueryAsync(() => {
            resolve(oList);
          }, (sender, args) => {
            reject(args.get_message());
          });
        });
      };

      const _getListByTitle = (title: string): Promise<any> => {
        return new Promise((resolve, reject) => {
          // const ctx = SP.ClientContext.get_current();
          const ctx = new SP.ClientContext(_spPageContextInfo.webServerRelativeUrl);
          const oWeb = ctx.get_web();
          const oLists = oWeb.get_lists();
          const oList = oLists.getByTitle(title);
          ctx.load(oList);
          ctx.executeQueryAsync(() => {
            resolve(oList.get_title());
          }, (sender, args) => {
            reject(args.get_message());
          });
        });
      };

      _createList(testVariables.newListName, 'Test List created with JsomNode', SP.ListTemplateType.genericList)
        .then(response => {
          return _getListByTitle(testVariables.newListName);
        })
        .then(response => {
          expect(response).to.equal(testVariables.newListName);
          done();
        })
        .catch(done);
    });

    it('should create list item', function (done: MochaDone): void {
      this.timeout(30 * 1000);

      const _createListItem = (listTitle: string, metadata: any): Promise<any> => {
        return new Promise((resolve, reject) => {
          // const ctx = SP.ClientContext.get_current();
          const ctx = new SP.ClientContext(_spPageContextInfo.webServerRelativeUrl);
          const oWeb = ctx.get_web();
          const oLists = oWeb.get_lists();
          const oList = oLists.getByTitle(listTitle);

          const itemCreationInfo = new SP.ListItemCreationInformation();
          const oListItem = oList.addItem(itemCreationInfo);

          for (let field of Object.keys(metadata)) {
            oListItem.set_item(field, metadata[field]);
          }
          oListItem.update();

          ctx.load(oListItem);
          ctx.executeQueryAsync(() => {
            resolve(oListItem);
          }, (sender, args) => {
            reject(args.get_message());
          });
        });
      };

      const _getListItemsCount = (listTitle: string): Promise<any> => {
        return new Promise((resolve, reject) => {
          // const ctx = SP.ClientContext.get_current();
          const ctx = new SP.ClientContext(_spPageContextInfo.webServerRelativeUrl);
          const oWeb = ctx.get_web();
          const oLists = oWeb.get_lists();
          const oList = oLists.getByTitle(listTitle);
          ctx.load(oList);
          ctx.executeQueryAsync(() => {
            resolve(oList.get_itemCount());
          }, (sender, args) => {
            reject(args.get_message());
          });
        });
      };

      _createListItem(testVariables.newListName, { Title: 'New item' })
        .then(response => {
          return _getListItemsCount(testVariables.newListName);
        })
        .then(response => {
          expect(response).to.equal(1);
          done();
        })
        .catch(done);
    });

    it('should delete list item', function (done: MochaDone): void {
      this.timeout(30 * 1000);

      const _deleteItemById = (listTitle: string, itemId: number): Promise<any> => {
        return new Promise((resolve, reject) => {
          // const ctx = SP.ClientContext.get_current();
          const ctx = new SP.ClientContext(_spPageContextInfo.webServerRelativeUrl);
          const oWeb = ctx.get_web();
          const oLists = oWeb.get_lists();
          const oList = oLists.getByTitle(listTitle);
          const oItem = oList.getItemById(itemId);

          oItem.deleteObject();
          ctx.executeQueryAsync(() => {
            resolve(oItem);
          }, (sender, args) => {
            reject(args.get_message());
          });
        });
      };

      const _deleteItemWithGreatesId = (listTitle: string): Promise<any> => {
        return new Promise((resolve, reject) => {
          // const ctx = SP.ClientContext.get_current();
          const ctx = new SP.ClientContext(_spPageContextInfo.webServerRelativeUrl);
          const oWeb = ctx.get_web();
          const oLists = oWeb.get_lists();
          const oList = oLists.getByTitle(listTitle);

          const camlQuery = new SP.CamlQuery();
          camlQuery.set_viewXml(`
              <View>
                  <Query>
                      <OrderBy>
                          <FieldRef Name='Created' Ascending='True'></FieldRef>
                      </OrderBy>
                  </Query>
                  <ViewFields>
                      <FieldRef Name='ID'/>
                      <FieldRef Name='Title'/>
                  </ViewFields>
              </View>
          `);
          let oItems = oList.getItems(camlQuery);

          ctx.load(oItems);
          ctx.executeQueryAsync(() => {
            let itemsData = oItems.get_data();
            if (itemsData.length === 0) {
              reject('No items found in a list');
            }
            resolve(_deleteItemById(listTitle, itemsData[0].get_fieldValues().ID));
          }, (sender, args) => {
            reject(args.get_message());
          });
        });
      };

      _deleteItemWithGreatesId(testVariables.newListName)
        .then(response => {
          done();
        })
        .catch(done);
    });

    after('Deleting test objects', function (done: MochaDone): void {
      this.timeout(30 * 1000);

      let digest: string;
      request.requestDigest(config.siteUrl)
        .then(response => {
          digest = response;
          return request.get(`${config.siteUrl}/_api/web/lists/getByTitle('${testVariables.newListName}')`)
            .then(res => {
              return 'can delete';
            })
            .catch(ex => {
              if (ex.statusCode === 404) {
                return ''; // Do not try to delete if wasn't created
              } else {
                throw ex;
              }
            });
        })
        .then((response): any => {
          if (response === 'can delete') {
            // Delete created test list
            return request.post(`${config.siteUrl}/_api/web/lists/getByTitle('${testVariables.newListName}')`, {
              headers: {
                'X-RequestDigest': digest,
                'X-HTTP-Method': 'DELETE',
                'IF-MATCH': '*'
              }
            });
          } else {
            return '';
          }
        })
        .then(() => {
          done();
        })
        .catch(done);

    });

    /**
     * TBD:
     *  - Taxonomy
     *  - User profiles
     *  - Search
     *  ...
     *
     */

  });

}
