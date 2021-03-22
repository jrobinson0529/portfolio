const formModal = (string) => `<div class="modal fade" id="formModal" tabindex="-1" aria-labelledby="formModal" aria-hidden="true">
                                <div class="modal-dialog">
                                  <div class="modal-content">
                                    <div class="modal-header">
                                      <h5 class="modal-title w-100" id="formModalTitle">${string}</h5>
                                    </div>
                                    <div class="modal-body">
                                      <div class="tech-used" id="techUsed">
                                      </div>
                                    </div>
                                    <div class="modal-footer">
                                      <button type="button" class="btn btn-secondary" data-dismiss="modal">X</button>
                                    </div>
                                  </div>
                                </div>
                              </div>`;

export default formModal;
