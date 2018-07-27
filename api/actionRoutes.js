const router = require('express')();
const Action = require('../data/helpers/actionModel');

//@route    POST api/actions/
//@desc     create project
//@access   public
router.post('/', async (req, res, next) => {
  const { description, completed, project_id, notes } = req.body;
  if (!project_id) {
    next({ code: 400, message: 'Actions must be connected to a project' });
  } else if (!description) {
    next({ code: 400, message: 'Actions must include a description' });
  }
  const action = {
    project_id,
    description,
    completed,
    notes
  };

  try {
    const created = await Action.insert(action);
    res.status(201).json(created);
  } catch (err) {
    next({ code: 500, message: err.message });
  }
});

//@route    GET api/actions/
//@desc     create project
//@access   public
router.get('/', async (req, res, next) => {
  try {
    const actions = await Action.get();
    res.status(200).json(actions);
  } catch (err) {
    next({ code: 500, message: err.message });
  }
});

//@route    GET api/actions/
//@desc     create project
//@access   public
router.get('/:id', async (req, res, next) => {
  const { id } = req.params;

  try {
    const action = await Action.get(id);
    res.status(200).json(action);
  } catch (err) {
    next({ code: 400, message: err.message });
  }
});

//@route    PUT api/actions/
//@desc     create project
//@access   public
router.put('/:id', async (req, res, next) => {
  const { id } = req.params;
  const { description, completed, project_id, notes } = req.body;

  const action = {
    description,
    completed,
    project_id,
    notes
  };

  if (!project_id) {
    next({ code: 400, message: 'Actions must be connected to a project' });
  } else if (!description) {
    next({ code: 400, message: 'Actions must include a description' });
  }
  try {
    const updated = await Action.update(id, action);
    res.status(201).json(updated);
  } catch (err) {
    next({ code: 500, message: err.message });
  }
});

//@route    DELETE api/actions/
//@desc     create project
//@access   public
router.delete('/:id', async (req, res, next) => {
  const { id } = req.params;

  try {
    const deleted = await Action.remove(id);
    if (deleted > 0) {
      res.status(201).json({ msg: 'Action successfully deleted' });
    } else next({ code: 500, message: 'Error deleting action' });
  } catch (err) {
    next({ code: 400, message: err.message });
  }
});

module.exports = router;
