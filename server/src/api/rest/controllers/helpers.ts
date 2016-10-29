interface Entity {
  id: number;
}

export function toLink(req, name: string, entity: Entity) {
  return `http://${req.headers.host}/api/${name}/${entity.id}`;
}